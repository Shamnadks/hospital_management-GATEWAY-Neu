// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class filterDepartmentService {
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
    this.serviceName = 'filterDepartmentService';
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
      instance = new filterDepartmentService(
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
    //appendnew_flow_filterDepartmentService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: filterDepartmentService'
    );
    //appendnew_flow_filterDepartmentService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: filterDepartmentService');
    //appendnew_flow_filterDepartmentService_HttpIn
  }
  //   service flows_filterDepartmentService

  async filterDepartmentService(
    parentSpanInst,
    data: any = undefined,
    response: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'filterDepartmentService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
        response,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validation(bh, parentSpanInst);
      //appendnew_next_filterDepartmentService
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qAnKd14advEjb2RM',
        spanInst,
        'filterDepartmentService'
      );
    }
  }
  //appendnew_flow_filterDepartmentService_start

  async validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validation',
      parentSpanInst
    );
    try {
      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oGBTM9rZ2wMMdkN7(bh, parentSpanInst);
      //appendnew_next_validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QaHGJja1ZznSQ8NX',
        spanInst,
        'validation'
      );
    }
  }

  async sd_oGBTM9rZ2wMMdkN7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oGBTM9rZ2wMMdkN7',
      parentSpanInst
    );
    try {
      bh.local.url = `${process.env.API_URL}/departmentfilter/post`;
      if (bh.input?.data?.id) {
        bh.input.response = {
          id: [bh.input?.data?.id],
        };
      } else {
        bh.input.response = {
          id: '',
        };
      }
      console.log(bh.input.response);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.departmentApiCall(bh, parentSpanInst);
      //appendnew_next_sd_oGBTM9rZ2wMMdkN7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oGBTM9rZ2wMMdkN7',
        spanInst,
        'sd_oGBTM9rZ2wMMdkN7'
      );
    }
  }

  async departmentApiCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.input.response,
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
      bh = await this.sd_CHe68h6GHWFcLFWZ(bh, parentSpanInst);
      //appendnew_next_departmentApiCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_17O6dqjTNokK51Jh');
    }
  }

  async sd_CHe68h6GHWFcLFWZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CHe68h6GHWFcLFWZ',
      parentSpanInst
    );
    try {
      console.log(bh.local.response);
      console.log('fcvgybhnujimkl,');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_CHe68h6GHWFcLFWZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CHe68h6GHWFcLFWZ',
        spanInst,
        'sd_CHe68h6GHWFcLFWZ'
      );
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
  //appendnew_flow_filterDepartmentService_Catch
}
