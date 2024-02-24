// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_cbdBH9TA3DDjglXD from './get_holiday_service'; //_splitter_
//append_imports_end
export class get_holiday_api {
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
    this.serviceName = 'get_holiday_api';
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
      instance = new get_holiday_api(
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
    //appendnew_flow_get_holiday_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_holiday_api');
    //appendnew_flow_get_holiday_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_holiday_api');

    this.app['get'](
      `${this.serviceBasePath}/holiday/get`,
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
          bh = await this.sd_0kSkyoqxEPYg7i38(bh, parentSpanInst);
          //appendnew_next_sd_7ffTB4fpHocfVGuu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7ffTB4fpHocfVGuu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_holiday_api_HttpIn
  }
  //   service flows_get_holiday_api

  //appendnew_flow_get_holiday_api_start

  async sd_0kSkyoqxEPYg7i38(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0kSkyoqxEPYg7i38',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_cbdBH9TA3DDjglXDInstance: SSD_SERVICE_ID_sd_cbdBH9TA3DDjglXD.get_holiday_service =
        SSD_SERVICE_ID_sd_cbdBH9TA3DDjglXD.get_holiday_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_cbdBH9TA3DDjglXDInstance.getHolidayService(
          spanInst
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hXgTVh72OBdNJzEW(bh, parentSpanInst);
      //appendnew_next_sd_0kSkyoqxEPYg7i38
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0kSkyoqxEPYg7i38',
        spanInst,
        'sd_0kSkyoqxEPYg7i38'
      );
    }
  }

  async sd_hXgTVh72OBdNJzEW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hXgTVh72OBdNJzEW',
      parentSpanInst
    );
    try {
      console.log(bh.local?.result.payload, 'gotttttttttt');
      bh.local.response = {
        statusCode: 200,
        response: bh.local?.result.payload?.data,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WKoTvfDyN7NHy7l7(bh, parentSpanInst);
      //appendnew_next_sd_hXgTVh72OBdNJzEW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hXgTVh72OBdNJzEW',
        spanInst,
        'sd_hXgTVh72OBdNJzEW'
      );
    }
  }

  async sd_WKoTvfDyN7NHy7l7(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WKoTvfDyN7NHy7l7');
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
  //appendnew_flow_get_holiday_api_Catch
}
