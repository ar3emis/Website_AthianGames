"""Pack real Unreal EXR captures into compact lossless browser textures.
Requires numpy, Pillow and OpenEXR; run with the directory from CaptureWebBuffers.py.
"""
import json, sys
from pathlib import Path
import numpy as np
import OpenEXR
from PIL import Image

source=Path(sys.argv[1])
root=Path(__file__).resolve().parents[1]
output=root/'public/images/products/art-of-shader-ultimate-post-process/playground'
output.mkdir(parents=True,exist_ok=True)
def read(name):
    image=OpenEXR.File(str(source/(name+'.exr')))
    data=image.channels()['RGBA'].pixels
    assert data.shape==(720,1280,4),data.shape
    return data
def save(name,rgb):Image.fromarray(rgb.astype('uint8')).save(output/(name+'.png'),optimize=True)
def pack_depth(depth):
    value=np.rint(np.nan_to_num(depth,nan=65535,posinf=65535)).clip(0,65535).astype('uint16')
    return np.stack([value%256,value//256,np.zeros_like(value)],axis=-1)
color=read('color')[:,:,:3]
color=np.where(color<=.0031308,12.92*color,1.055*np.maximum(color,0)**(1/2.4)-.055)
save('color',np.rint(color.clip(0,1)*255))
depth=read('depth')[:,:,0]
assert np.quantile(depth,.5)>100,'Depth buffer must be in world units, not a duplicate color capture'
save('depth',pack_depth(depth))
normal=read('normal')[:,:,:3]
assert np.min(normal)<-.1 and np.max(normal)>.9,'Expected signed world normals'
save('normal',np.rint((normal*.5+.5).clip(0,1)*255))
custom=read('custom')
packed=pack_depth(custom[:,:,0]*65535)
packed[:,:,2]=np.rint(custom[:,:,1]*255).clip(0,255)
save('custom',packed)
camera=json.loads((source/'capture.json').read_text())
(output/'camera.json').write_text(json.dumps(camera,indent=2)+'\n')
print(json.dumps(dict(depth_range=[float(np.min(depth)),float(np.max(depth))],stencil_ids=np.unique(packed[:,:,2]).tolist(),files={p.name:p.stat().st_size for p in output.iterdir()}),indent=2))
