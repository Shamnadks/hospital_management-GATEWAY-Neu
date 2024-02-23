// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class edit_holiday_service {
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
    this.serviceName = 'edit_holiday_service';
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
      instance = new edit_holiday_service(
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
    //appendnew_flow_edit_holiday_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: edit_holiday_service');
    //appendnew_flow_edit_holiday_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: edit_holiday_service');
    //appendnew_flow_edit_holiday_service_HttpIn
  }
  //   service flows_edit_holiday_service

  async editholiday(
    parentSpanInst,
    id: any = undefined,
    data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'editholiday',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
        data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FupueKfWBXbgu0eI(bh, parentSpanInst);
      //appendnew_next_editholiday
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
        'sd_Vq7NZ4yOphwg3u91',
        spanInst,
        'editholiday'
      );
    }
  }
  //appendnew_flow_edit_holiday_service_start

  async sd_FupueKfWBXbgu0eI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FupueKfWBXbgu0eI',
      parentSpanInst
    );
    try {
      bh.local.url = `${process.env.API_URL}/holiday/put`;
      bh.local.body = {
        holidays: {
          id: bh.input?.id,
          name: bh.input.data.name,
          starting_date: bh.input.data.starting_date,
          end_date: bh.input.data.end_date,
          days: bh.input.data.days,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xtMWJpSBFwkQEyDT(bh, parentSpanInst);
      //appendnew_next_sd_FupueKfWBXbgu0eI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FupueKfWBXbgu0eI',
        spanInst,
        'sd_FupueKfWBXbgu0eI'
      );
    }
  }

  async sd_xtMWJpSBFwkQEyDT(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'put',
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

      bh.local.response = responseMsg;
      //appendnew_next_sd_xtMWJpSBFwkQEyDT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xtMWJpSBFwkQEyDT');
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
  //appendnew_flow_edit_holiday_service_Catch
}
