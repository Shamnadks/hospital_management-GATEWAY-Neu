// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class create_holiday_service {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'create_holiday_service';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new create_holiday_service(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_create_holiday_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: create_holiday_service');
    //appendnew_flow_create_holiday_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: create_holiday_service');
    //appendnew_flow_create_holiday_service_HttpIn
  }
  //   service flows_create_holiday_service

  async sd_TAeFqxHrdRVlnmzU(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sd_TAeFqxHrdRVlnmzU',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.configureUrl(bh, parentSpanInst);
      //appendnew_next_sd_TAeFqxHrdRVlnmzU
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TAeFqxHrdRVlnmzU',
        spanInst,
        'sd_TAeFqxHrdRVlnmzU'
      );
    }
  }
  //appendnew_flow_create_holiday_service_start

  async configureUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'configureUrl',
      parentSpanInst
    );
    try {
      bh.local.url = `${process.env.API_URL}/holiday/post`;
      bh.local.body = {
        holidays: {
          starting_date: bh.input.body.starting_date,
          end_date: bh.input.body.starting_date,
          name: bh.input.body.name,
          days: bh.input.body.days,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0IeuJb89Z9VO5AJE(bh, parentSpanInst);
      //appendnew_next_configureUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GcsEVqRbXVCBPP7W',
        spanInst,
        'configureUrl'
      );
    }
  }

  async sd_0IeuJb89Z9VO5AJE(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.input.response = responseMsg;
      //appendnew_next_sd_0IeuJb89Z9VO5AJE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0IeuJb89Z9VO5AJE');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_create_holiday_service_Catch
}
