// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class appointmentStatusService {
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
    this.serviceName = 'appointmentStatusService';
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
      instance = new appointmentStatusService(
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
    //appendnew_flow_appointmentStatusService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: appointmentStatusService'
    );
    //appendnew_flow_appointmentStatusService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: appointmentStatusService');
    //appendnew_flow_appointmentStatusService_HttpIn
  }
  //   service flows_appointmentStatusService

  async sd_0yJa3W1Bj3oShiAr(parentSpanInst, query: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sd_0yJa3W1Bj3oShiAr',
      parentSpanInst
    );
    let bh: any = {
      input: {
        query,
      },
      local: {
        response: undefined,
        requestBody: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GRVrxyiXttB1Ockm(bh, parentSpanInst);
      //appendnew_next_sd_0yJa3W1Bj3oShiAr
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
        'sd_0yJa3W1Bj3oShiAr',
        spanInst,
        'sd_0yJa3W1Bj3oShiAr'
      );
    }
  }
  //appendnew_flow_appointmentStatusService_start

  async sd_GRVrxyiXttB1Ockm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GRVrxyiXttB1Ockm',
      parentSpanInst
    );
    try {
      bh.local.url = `${process.env.API_URL}/paymentverify/post`;
      console.log(bh.input.query);
      bh.local.requestBody = {
        payment_id: bh.input?.query?.payment_id,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusUpdateApiCall(bh, parentSpanInst);
      //appendnew_next_sd_GRVrxyiXttB1Ockm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GRVrxyiXttB1Ockm',
        spanInst,
        'sd_GRVrxyiXttB1Ockm'
      );
    }
  }

  async statusUpdateApiCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.requestBody,
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
      //appendnew_next_statusUpdateApiCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ihbNeafUfcyj17K2');
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
  //appendnew_flow_appointmentStatusService_Catch
}
