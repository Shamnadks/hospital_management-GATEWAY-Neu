// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class doctorService {
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
    this.serviceName = 'doctorService';
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
      instance = new doctorService(
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
    //appendnew_flow_doctorService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: doctorService');
    //appendnew_flow_doctorService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: doctorService');
    //appendnew_flow_doctorService_HttpIn
  }
  //   service flows_doctorService

  async doctorService(parentSpanInst, doctor: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'doctorService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        doctor,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validation(bh, parentSpanInst);
      //appendnew_next_doctorService
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
        'sd_R0xUVWx8v7iuEpcb',
        spanInst,
        'doctorService'
      );
    }
  }
  //appendnew_flow_doctorService_start

  async validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validation',
      parentSpanInst
    );
    try {
      let data = bh.input.doctor;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      console.log(data);
      if (!data?.name?.trim()) throw new Error('Invalid name');
      if (!data?.email?.trim()) throw new Error('Invalid email');
      if (!emailRegex.test(data?.email)) throw new Error('Invalid email');
      // if(!""+data?.phone_no?.trim()) throw new Error('Invalid phone number')
      if (typeof data['phone_no'] !== 'number')
        throw new Error('Invalid phone number');
      if (!data.address?.trim()) throw new Error('Invalid address');
      // if(typeof data?.dob !== 'number') throw new Error('Invalid age')
      if (typeof data['department_id'] !== 'number')
        throw new Error('Invalid department');
      if (typeof data?.salary !== 'number') throw new Error('Invalid salary');
      if (typeof data['token_limit'] !== 'number')
        throw new Error('Invalid token number');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dataConfiguration(bh, parentSpanInst);
      //appendnew_next_validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_elkfQpFfvo1IQs1K',
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
      // bh.local.url = `${process.env.API_URL}/department/put`
      let data = bh.input?.doctor;
      bh.local.url = `${process.env.API_URL}/doctors/post`;
      bh.local.data = {
        id: 0,
        name: data?.name,
        phone_no: data?.phone_no,
        email: data?.email,
        address: data?.email,
        dob: data?.dob,
        department_id: data?.department_id,
        education: data?.education,
        salary: data?.salary,
        token_limit: data?.token_limit,
        status: 'Available',
      };
      console.log(bh.local.data);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.departmentApiCall(bh, parentSpanInst);
      //appendnew_next_dataConfiguration
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q7JPk88Is00Mx2Wh',
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
      return await this.errorHandler(bh, e, 'sd_TRKSas82Cpnw2hDl');
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
  //appendnew_flow_doctorService_Catch
}
