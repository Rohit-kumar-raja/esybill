module.exports = {
    apps: [
      {
        name: 'codersmile',
        port: '3001',
        exec_mode: 'cluster',
        instances: 'max',
        script: 'serve build/'
      }
    ]
  }
  
