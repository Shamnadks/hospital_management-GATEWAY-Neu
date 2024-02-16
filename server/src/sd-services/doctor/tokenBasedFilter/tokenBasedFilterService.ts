// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class tokenBasedFilterService {
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
    this.serviceName = 'tokenBasedFilterService';
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
      instance = new tokenBasedFilterService(
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
    //appendnew_flow_tokenBasedFilterService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: tokenBasedFilterService'
    );
    //appendnew_flow_tokenBasedFilterService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: tokenBasedFilterService');
    //appendnew_flow_tokenBasedFilterService_HttpIn
  }
  //   service flows_tokenBasedFilterService

  async filterDepartmentService(
    parentSpanInst,
    data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'filterDepartmentService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        response: undefined,
        reqObject: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validation(bh, parentSpanInst);
      //appendnew_next_filterDepartmentService
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
        'sd_87XqvgZoFrKh3bh5',
        spanInst,
        'filterDepartmentService'
      );
    }
  }
  //appendnew_flow_tokenBasedFilterService_start

  async validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validation',
      parentSpanInst
    );
    try {
      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dataConfig(bh, parentSpanInst);
      //appendnew_next_validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UKR869pncTearIX3',
        spanInst,
        'validation'
      );
    }
  }

  async dataConfig(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dataConfig',
      parentSpanInst
    );
    try {
      bh.local.url = `${process.env.API_URL}/selectdoctor/post`;

      bh.local.reqObject = {};
      console.log(bh.input, 'calling');

      if (bh.input?.data?.id) {
        bh.local?.reqObject = {
          id: bh.input?.data?.id,
        };
      }

      // if(bh.input?.data?.department){
      //     bh.local?.reqObject?.['department_id'] = [bh.input?.data?.department]
      // }

      console.log(bh.local?.reqObject);
      console.log(bh.local?.url);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctorApiCall(bh, parentSpanInst);
      //appendnew_next_dataConfig
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_prfvpHvKeURTCxQn',
        spanInst,
        'dataConfig'
      );
    }
  }

  async doctorApiCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.reqObject,
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
      //appendnew_next_doctorApiCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vJ0TYXqPx0lww2Bc');
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
  //appendnew_flow_tokenBasedFilterService_Catch
}
