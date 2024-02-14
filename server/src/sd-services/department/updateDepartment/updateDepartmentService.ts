// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class updateDepartmentService {
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
    this.serviceName = 'updateDepartmentService';
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
      instance = new updateDepartmentService(
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
    //appendnew_flow_updateDepartmentService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: updateDepartmentService'
    );
    //appendnew_flow_updateDepartmentService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateDepartmentService');
    //appendnew_flow_updateDepartmentService_HttpIn
  }
  //   service flows_updateDepartmentService

  async departmentUpdateService(
    parentSpanInst,
    data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'departmentUpdateService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oH3kpgn9hfGQWaNM(bh, parentSpanInst);
      //appendnew_next_departmentUpdateService
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
        'sd_YaV2QgAhVAzcA6Ps',
        spanInst,
        'departmentUpdateService'
      );
    }
  }
  //appendnew_flow_updateDepartmentService_start

  async sd_oH3kpgn9hfGQWaNM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oH3kpgn9hfGQWaNM',
      parentSpanInst
    );
    try {
      let data = bh.input?.data;
      console.log(data, 'data');
      if (!data?.id) throw new Error('Invalide operation');
      if (!data?.name?.trim()) {
        throw new Error('Invalid department');
      }
      if (!data?.info?.trim()) throw new Error('Invalid Info');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dataConfiguration(bh, parentSpanInst);
      //appendnew_next_sd_oH3kpgn9hfGQWaNM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oH3kpgn9hfGQWaNM',
        spanInst,
        'sd_oH3kpgn9hfGQWaNM'
      );
    }
  }

  async dataConfiguration(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dataConfiguration',
      parentSpanInst
    );
    try {
      bh.local.url = `${process.env.API_URL}/department/put`;
      bh.local.data = {
        department: {
          id: bh.input.data.id,
          name: bh.input.data.name,
          info: bh.input.data.info,
          status: bh.input.data.status,
        },
      };
      console.log(bh.local.data);
      console.log(bh.local.url);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updationRequest(bh, parentSpanInst);
      //appendnew_next_dataConfiguration
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yR4wxS5qsE2xArin',
        spanInst,
        'dataConfiguration'
      );
    }
  }

  async updationRequest(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'put',
        headers: {},
        followRedirects: true,
        cookies: undefined,
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
      //appendnew_next_updationRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BuhTYSBAEv3iIaiM');
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
  //appendnew_flow_updateDepartmentService_Catch
}
