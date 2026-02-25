content = '[build]\n  command = "npm run build"\n  install = "corepack disable && npm install --legacy-peer-deps"\n  publish = ".next"\n\n[build.environment]\n  NODE_VERSION = "20"\n  AWS_LAMBDA_JS_RUNTIME = "nodejs20.x"\n\n[functions]\n  node_bundler = "esbuild"\n\n[[plugins]]\n  package = "@netlify/plugin-nextjs"\n\n[context.production.environment]\n  NODE_VERSION = "20"\n  AWS_LAMBDA_JS_RUNTIME = "nodejs20.x"\n'
with open(r'D:\MyWebsite\athian-games\netlify.toml', 'w', newline='\n') as f:
    f.write(content)
print('Done')

