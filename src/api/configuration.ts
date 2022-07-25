import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import { Configuration } from '@midwayjs/decorator';
import * as view from '@midwayjs/view-ejs';
import { join } from 'path'
/**
 * setup midway server
 */
export default createConfiguration({
  imports: [view,Koa, hooks()],
  importConfigs: [join(__dirname, 'config'),{ default: { keys: 'session_keys' } }],
});
