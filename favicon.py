  
#!/usr/bin/python3

import argparse
import os, sys
from io import open as iopen
from PIL import Image
from pilkit.processors import ProcessorPipeline, ResizeToFit, SmartResize


# Function that downloads images
def faviconGenerator(originalImage, directory):
	index = 0

	sizes = [
	#
	#	FileName		LogoSize		BoxSize
	#
		["favicon-32",		[32,32],		[32,32]],
		["favicon-57",		[57,57],		[57,57]],
		["favicon-76",		[76,76],		[76,76]],
		["favicon-96",		[96,96],		[96,96]],
		["favicon-120",		[120,120],		[120,120]],
		["favicon-128",		[128,128],		[128,128]],
		["smalltile",		[128,128],		[128,128]],
		["favicon-144",		[144,144],		[144,144]],
		["favicon-152",		[152,152],		[152,152]],
		["favicon-180",		[180,180],		[180,180]],
		["favicon-196",		[196,196],		[196,196]],
		["favicon-228",		[228,228],		[228,228]],
		["mediumtile",		[270,270],		[270,270]],
		["widetile",		[270,270],		[558,270]],
		["largetile",		[558,558],		[558,558]],
	]

	outfile = os.path.splitext(originalImage)[0] + ".png"

	for size in sizes:
		im = Image.open(originalImage)
		processor = ProcessorPipeline([ResizeToFit(size[1][0], size[1][1])])
		result = processor.process(im)
		background = Image.new('RGBA', size[2], (255, 255, 255, 0))
		background.paste(
			result, (int((size[2][0] - result.size[0]) / 2), int((size[2][1] - result.size[1]) / 2))
		)
		background.save(directory + "/" + size[0] + ".png")
		print("{}.png generated".format(size[0]))


def main(originalImage = "fluidicon.png", directoryName = "default"):
	print("\nFaviconGenerator by Hecsall\n")
	cwd = os.getcwd()
	# Manage the directory name
	if directoryName == "default":
		directory = cwd+"/themes/athian_games_theme/static/images/favicon"
	else:
		directory = directoryName[1:] if directoryName[0] == '/' else directoryName

	# Creates the directory
	if not os.path.exists(directory):
		os.makedirs(directory)

	# Start the favicon generator
	faviconGenerator(originalImage, directory)
	print("\nAll the Favicons generated in \"{}\" folder\n".format(directory))



if __name__ == "__main__":
	main()