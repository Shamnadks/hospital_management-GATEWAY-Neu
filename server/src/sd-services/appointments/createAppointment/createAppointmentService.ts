// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class createAppointmentService {
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
    this.serviceName = 'createAppointmentService';
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
      instance = new createAppointmentService(
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
    //appendnew_flow_createAppointmentService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: createAppointmentService'
    );
    //appendnew_flow_createAppointmentService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: createAppointmentService');
    //appendnew_flow_createAppointmentService_HttpIn
  }
  //   service flows_createAppointmentService

  async appointmentService(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'appointmentService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        appointmentDetails: undefined,
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validation(bh, parentSpanInst);
      //appendnew_next_appointmentService
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
        'sd_n7B7BA7ATjPV3SGH',
        spanInst,
        'appointmentService'
      );
    }
  }
  //appendnew_flow_createAppointmentService_start

  async validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validation',
      parentSpanInst
    );
    try {
      console.log('validation');
      console.log(bh.input.data);
      let data = bh.input?.data;
      let pin_code = data?.pin_code;
      if (!data?.name.trim()) throw new Error('Invalid Name');
      if (typeof data?.phone_no !== 'number')
        throw new Error('Invalid phone number');
      if (!data?.place?.trim()) throw new Error('Invalid place name');
      if (!data?.address?.trim()) throw new Error('Invalid address');
      if (typeof data?.pin_code !== 'number')
        if (pin_code?.length > 6 || pin_code?.length < 6)
          throw new Error('Invalid pincode');
      if (!data?.email?.trim()) throw new Error('Invalid email address');
      if (!data?.blood_group?.trim()) throw new Error('Invalid blood group');
      if (!data?.doctor_id) throw new Error('Invalid docotor Id');
      if (!data?.cash) throw new Error('Invalid Cash');
      if (!data?.payment_method?.trim())
        throw new Error('Invalid payment method');
      if (!data?.sucess_url.trim()) throw new Error('Invalid success url');
      if (!data?.cancel_url.trim()) throw new Error('Invalid cancel url');
      // if(!data.payment_method !== 'cash' || !data?.payment_method !== 'strip') throw new Error('Invalid payment method')

      this.tracerService.sendData(spanInst, bh);
      bh = await this.dataConfig(bh, parentSpanInst);
      //appendnew_next_validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nwjgwjrrw3rp14YA',
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
      const currentDate = new Date(bh.input?.data?.dob);

      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
      const day = String(currentDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate);
      bh.local.url = `${process.env.API_URL}/appointment/post`;
      bh.local.appointmentDetails = {
        id: 0,
        name: bh.input?.data?.name,
        phone_no: bh.input?.data?.phone_no,
        dob: formattedDate,
        place: bh.input?.data?.place,
        address: bh.input?.data?.address,
        pin_code: bh.input?.data?.pin_code,
        email: bh.input?.data?.email,
        blood_group: bh.input?.data?.blood_group,
        doctor_id: bh.input?.data?.doctor_id,
        cash: bh.input?.data?.cash,
        payment_method: bh.input?.data?.payment_method,
        sucess_url: bh.input?.data?.sucess_url,
        cancel_url: bh.input?.data?.cancel_url,
      };
      // console.log(bh.local.appointmentDetails)

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmenApiCall(bh, parentSpanInst);
      //appendnew_next_dataConfig
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lhjqyC3yDKIg0cji',
        spanInst,
        'dataConfig'
      );
    }
  }

  async appointmenApiCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.appointmentDetails,
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
      //appendnew_next_appointmenApiCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uyBTiN53oHe8z0x1');
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
  //appendnew_flow_createAppointmentService_Catch
}
