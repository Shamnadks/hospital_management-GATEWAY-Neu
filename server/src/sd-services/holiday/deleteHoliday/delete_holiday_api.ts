// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { validateNode } from '../../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import * as SSD_SERVICE_ID_sd_418prrgjKUiwBSGa from './delete_holiday_service'; //_splitter_
//append_imports_end
export class delete_holiday_api {
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
    this.serviceName = 'delete_holiday_api';
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
      instance = new delete_holiday_api(
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
    //appendnew_flow_delete_holiday_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: delete_holiday_api');
    //appendnew_flow_delete_holiday_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: delete_holiday_api');

    this.app['delete'](
      `${this.serviceBasePath}/holiday/delete`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
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
          this.sdService.addDMPropertiesToBh(bh, req, 'holiday_id');
          bh = await this.sd_kZGmgJLPuum1qo5w(bh, parentSpanInst);
          //appendnew_next_sd_N3FdaHAYtoRbfAhP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_N3FdaHAYtoRbfAhP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_delete_holiday_api_HttpIn
  }
  //   service flows_delete_holiday_api

  //appendnew_flow_delete_holiday_api_start

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
        'sd_dVzenJFyXDFkId0f',
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
      return await this.errorHandler(bh, e, 'sd_nKg17sn6ZWFmgSaQ');
    }
  }

  async sd_kZGmgJLPuum1qo5w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kZGmgJLPuum1qo5w',
      parentSpanInst
    );
    try {
      validateNode('_EN_389im5nt94', bh.input.query, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AAr07tRSrsfMQaP1(bh, parentSpanInst);
      //appendnew_next_sd_kZGmgJLPuum1qo5w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kZGmgJLPuum1qo5w',
        spanInst,
        'sd_kZGmgJLPuum1qo5w'
      );
    }
  }

  async sd_AAr07tRSrsfMQaP1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AAr07tRSrsfMQaP1',
      parentSpanInst
    );
    try {
      console.log(bh.input.query.id, 'id reached to api');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Px5eEjOAnrFy3lE8(bh, parentSpanInst);
      //appendnew_next_sd_AAr07tRSrsfMQaP1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AAr07tRSrsfMQaP1',
        spanInst,
        'sd_AAr07tRSrsfMQaP1'
      );
    }
  }

  async sd_Px5eEjOAnrFy3lE8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Px5eEjOAnrFy3lE8',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_418prrgjKUiwBSGaInstance: SSD_SERVICE_ID_sd_418prrgjKUiwBSGa.delete_holiday_service =
        SSD_SERVICE_ID_sd_418prrgjKUiwBSGa.delete_holiday_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_418prrgjKUiwBSGaInstance.sd_rqVSWpXDj3cTMaWk(
          spanInst,
          bh.input.query.id
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_P2LdIuO3oL0058y6(bh, parentSpanInst);
      //appendnew_next_sd_Px5eEjOAnrFy3lE8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Px5eEjOAnrFy3lE8',
        spanInst,
        'sd_Px5eEjOAnrFy3lE8'
      );
    }
  }

  async sd_P2LdIuO3oL0058y6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P2LdIuO3oL0058y6',
      parentSpanInst
    );
    try {
      console.log(bh.local?.result);
      bh.local.response = {
        status: process.env.SUCCESS_STATUS_CODE,
        response: bh.local?.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8CV8GP9CPLNnFuX6(bh, parentSpanInst);
      //appendnew_next_sd_P2LdIuO3oL0058y6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P2LdIuO3oL0058y6',
        spanInst,
        'sd_P2LdIuO3oL0058y6'
      );
    }
  }

  async sd_8CV8GP9CPLNnFuX6(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.response.status)
        .send(bh.local.response.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8CV8GP9CPLNnFuX6');
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
    const catchConnectedNodes = ['sd_dVzenJFyXDFkId0f', 'sd_nKg17sn6ZWFmgSaQ'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_delete_holiday_api_Catch
}
