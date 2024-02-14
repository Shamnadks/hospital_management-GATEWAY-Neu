// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_WnZ9t0oWHw4srDch from './appointmentStatusService'; //_splitter_
//append_imports_end
export class appointmentStatusApi {
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
    this.serviceName = 'appointmentStatusApi';
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
      instance = new appointmentStatusApi(
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
    //appendnew_flow_appointmentStatusApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: appointmentStatusApi');
    //appendnew_flow_appointmentStatusApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: appointmentStatusApi');

    this.app['put'](
      `${this.serviceBasePath}/appointment/put`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
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
          bh = await this.sd_8jIVTGtD5lOxdTRX(bh, parentSpanInst);
          //appendnew_next_sd_Ne2NyjqBI7dSi2Fy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ne2NyjqBI7dSi2Fy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_appointmentStatusApi_HttpIn
  }
  //   service flows_appointmentStatusApi

  //appendnew_flow_appointmentStatusApi_start

  async sd_8jIVTGtD5lOxdTRX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8jIVTGtD5lOxdTRX',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_WnZ9t0oWHw4srDchInstance: SSD_SERVICE_ID_sd_WnZ9t0oWHw4srDch.appointmentStatusService =
        SSD_SERVICE_ID_sd_WnZ9t0oWHw4srDch.appointmentStatusService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_WnZ9t0oWHw4srDchInstance.sd_0yJa3W1Bj3oShiAr(
          spanInst
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dI3t0sqwp7ypRk4W(bh, parentSpanInst);
      //appendnew_next_sd_8jIVTGtD5lOxdTRX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8jIVTGtD5lOxdTRX',
        spanInst,
        'sd_8jIVTGtD5lOxdTRX'
      );
    }
  }

  async sd_dI3t0sqwp7ypRk4W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dI3t0sqwp7ypRk4W',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: bh.local?.result?.status,
        message: 'Success',
        data: bh.local.result?.payload?.data,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CFVdykrsqHfFbeQ8(bh, parentSpanInst);
      //appendnew_next_sd_dI3t0sqwp7ypRk4W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dI3t0sqwp7ypRk4W',
        spanInst,
        'sd_dI3t0sqwp7ypRk4W'
      );
    }
  }

  async sd_CFVdykrsqHfFbeQ8(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CFVdykrsqHfFbeQ8');
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
  //appendnew_flow_appointmentStatusApi_Catch
}
