// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_rBMLYYjvVhOZ76b8 from './createAppointmentService'; //_splitter_
//append_imports_end
export class createAppointmentApi {
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
    this.serviceName = 'createAppointmentApi';
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
      instance = new createAppointmentApi(
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
    //appendnew_flow_createAppointmentApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: createAppointmentApi');
    //appendnew_flow_createAppointmentApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: createAppointmentApi');

    this.app['post'](
      `${this.serviceBasePath}/appointment/post`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_XmMdO6lY5WFL2DJ3(bh, parentSpanInst);
          //appendnew_next_sd_5M3azCNmW5JUTshO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5M3azCNmW5JUTshO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_createAppointmentApi_HttpIn
  }
  //   service flows_createAppointmentApi

  //appendnew_flow_createAppointmentApi_start

  async sd_XmMdO6lY5WFL2DJ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XmMdO6lY5WFL2DJ3',
      parentSpanInst
    );
    try {
      console.log('HI');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentServiceCall(bh, parentSpanInst);
      //appendnew_next_sd_XmMdO6lY5WFL2DJ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XmMdO6lY5WFL2DJ3',
        spanInst,
        'sd_XmMdO6lY5WFL2DJ3'
      );
    }
  }

  async appointmentServiceCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointmentServiceCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rBMLYYjvVhOZ76b8Instance: SSD_SERVICE_ID_sd_rBMLYYjvVhOZ76b8.createAppointmentService =
        SSD_SERVICE_ID_sd_rBMLYYjvVhOZ76b8.createAppointmentService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rBMLYYjvVhOZ76b8Instance.appointmentService(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.dataConfig(bh, parentSpanInst);
      //appendnew_next_appointmentServiceCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UiEHpKRKypWiLgqY',
        spanInst,
        'appointmentServiceCall'
      );
    }
  }

  async dataConfig(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dataConfig',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);
      bh.local.statusCode = process.env.SUCCESS_STATUS_CODE;
      bh.local.response = {
        status: 200,
        response: bh.local?.result?.payload?.data,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.appointmentApiCall(bh, parentSpanInst);
      //appendnew_next_dataConfig
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eocoa37MJR5UXYFq',
        spanInst,
        'dataConfig'
      );
    }
  }

  async appointmentApiCall(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ul7yeFoxZxSNVmMw');
    }
  }

  async errorInfo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('errorInfo', parentSpanInst);
    try {
      console.log(bh.error);
      bh.local.response = {
        status: 400,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.exceptionResponse(bh, parentSpanInst);
      //appendnew_next_errorInfo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1eMcUpnzHwdCinOP',
        spanInst,
        'errorInfo'
      );
    }
  }

  async exceptionResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tnZP3aXhRnccU7RS');
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
    if (
      false ||
      (await this.exceptionHandling(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async exceptionHandling(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_1eMcUpnzHwdCinOP', 'sd_tnZP3aXhRnccU7RS'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_createAppointmentApi_Catch
}
