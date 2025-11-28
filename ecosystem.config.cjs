module.exports = {
  apps: [
    {
      name: 'slidev-preview',
      cwd: __dirname,
      script: 'pnpm',
      args: 'exec slidev preview --host 0.0.0.0 --port 4173',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'production'
      },
      watch: false
    }
  ]
};
