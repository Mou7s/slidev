module.exports = {
  apps: [
    {
      name: 'slidev',
      cwd: __dirname,
      script: 'pnpm',
      args: 'dev -- --host 0.0.0.0 --port 3030',
      interpreter: 'bash',
      env: {
        NODE_ENV: 'development',
      },
      autorestart: true,
      max_restarts: 5,
      watch: false,
      error_file: 'logs/pm2-err.log',
      out_file: 'logs/pm2-out.log',
    },
  ],
};
