// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class departmentService {
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
    this.serviceName = 'departmentService';
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
      instance = new departmentService(
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
    //appendnew_flow_departmentService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: departmentService');
    //appendnew_flow_departmentService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: departmentService');
    //appendnew_flow_departmentService_HttpIn
  }
  //   service flows_departmentService

  async department(parentSpanInst, department: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'department',
      parentSpanInst
    );
    let bh: any = {
      input: {
        department,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validation(bh, parentSpanInst);
      //appendnew_next_department
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
        'sd_fehz8k9FxCbO3x4u',
        spanInst,
        'department'
      );
    }
  }
  //appendnew_flow_departmentService_start

  async validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validation',
      parentSpanInst
    );
    try {
      let data = bh.input?.department;
      if (!data?.name?.trim()) {
        throw new Error('Invalid department');
      }
      if (!data?.info?.trim()) throw new Error('Invalid Info');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dataConfiguration(bh, parentSpanInst);
      //appendnew_next_validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iO1KlqIxoKrqy5B4',
        spanInst,
        'validation'
      );
    }
  }

  async dataConfiguration(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dataConfiguration',
      parentSpanInst
    );
    try {
      bh.local.url = `${process.env.API_URL}/department/post`;
      bh.local.data = {
        id: 0,
        name: bh.input?.department?.name,
        info: bh.input?.department?.info,
        status: true,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.departmentApiCall(bh, parentSpanInst);
      //appendnew_next_dataConfiguration
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F72sahUmPEBPngPm',
        spanInst,
        'dataConfiguration'
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
        cookies: {},
        authType: undefined,
        body: bh.local.data,
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
      //appendnew_next_departmentApiCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZRRRaNpOciKNQZYY');
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
  //appendnew_flow_departmentService_Catch
}
