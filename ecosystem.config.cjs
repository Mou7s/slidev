module.exports = {
  apps: [
    {
      name: 'slidev',
      script: 'node',
      args: './node_modules/@slidev/cli/bin/slidev.js dev --host 0.0.0.0 --port 3030 --open false',
      cwd: __dirname,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      watch: false,
      error_file: 'logs/slidev-err.log',
      out_file: 'logs/slidev-out.log',
      merge_logs: true,
      max_memory_restart: '1G',
    },
  ],
};
