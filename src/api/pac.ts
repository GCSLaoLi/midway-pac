import {
    Api,
    Get,
    Query,
    SetHeader,
    useContext,
  } from '@midwayjs/hooks';
  import { Context } from '@midwayjs/koa';

  export default Api(
    Get("/api/pac.pac"), // Http Path: /api/pac,
    Query<{ host: string,port: string}>(), // Query: host=xxx&port=xxx
    SetHeader('Content-Type', 'application/x-ns-proxy-autoconfig'),
    async () => {
        const ctx = useContext<Context>();
        console.log(ctx.query);
        let proxy = "SOCKS 127.0.0.1:1080";
        if(ctx.query.host && ctx.query.port){
            proxy = "SOCKS5"+" "+ctx.query.host+":"+ctx.query.port;
        }

        await ctx.render('pac.ejs', {
            proxy: proxy,
          });
    }
  );