module.exports = {
  apps: [
    {
      name: 'slidev-preview',
      cwd: __dirname,
      script: 'pnpm',
      args: 'exec slidev preview slides.md --host 0.0.0.0 --port 3030',
      env: {
        NODE_ENV: 'production',
      },
      autorestart: true,
      max_restarts: 5,
      watch: false,
      error_file: 'logs/pm2-err.log',
      out_file: 'logs/pm2-out.log',
    },
  ],
};
