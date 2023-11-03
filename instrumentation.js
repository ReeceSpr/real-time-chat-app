export async function register(){
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const { startSocketServer } = await import('./server/server.js');
        startSocketServer();
    }
     
    if (process.env.NEXT_RUNTIME === 'edge') {
        console.log('Instrumenting Edge.js')
    }
}