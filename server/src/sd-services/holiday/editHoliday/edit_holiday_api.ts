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
import * as SSD_SERVICE_ID_sd_Iburt0vKUtQzrLFz from './edit_holiday_service'; //_splitter_
//append_imports_end
export class edit_holiday_api {
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
    this.serviceName = 'edit_holiday_api';
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
      instance = new edit_holiday_api(
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
    //appendnew_flow_edit_holiday_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: edit_holiday_api');
    //appendnew_flow_edit_holiday_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: edit_holiday_api');

    this.app['put'](
      `${this.serviceBasePath}/holiday/put`,
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
          this.sdService.addDMPropertiesToBh(bh, req, 'holiday');
          bh = await this.sd_avcn0KnvTDGJ9LV0(bh, parentSpanInst);
          //appendnew_next_sd_x7MqI0qPIURxS9ix
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_x7MqI0qPIURxS9ix');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_edit_holiday_api_HttpIn
  }
  //   service flows_edit_holiday_api

  //appendnew_flow_edit_holiday_api_start

  async sd_avcn0KnvTDGJ9LV0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_avcn0KnvTDGJ9LV0',
      parentSpanInst
    );
    try {
      validateNode('_EN_6p5c4fcw8s', bh.input.body.holiday, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_adQF4BbMcrgqUGxs(bh, parentSpanInst);
      //appendnew_next_sd_avcn0KnvTDGJ9LV0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_avcn0KnvTDGJ9LV0',
        spanInst,
        'sd_avcn0KnvTDGJ9LV0'
      );
    }
  }

  async sd_adQF4BbMcrgqUGxs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_adQF4BbMcrgqUGxs',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Iburt0vKUtQzrLFzInstance: SSD_SERVICE_ID_sd_Iburt0vKUtQzrLFz.edit_holiday_service =
        SSD_SERVICE_ID_sd_Iburt0vKUtQzrLFz.edit_holiday_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Iburt0vKUtQzrLFzInstance.editholiday(
          spanInst,
          bh.input.body.holiday.id,
          bh.input.body.holiday
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KFilNByKtBNlHtdR(bh, parentSpanInst);
      //appendnew_next_sd_adQF4BbMcrgqUGxs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_adQF4BbMcrgqUGxs',
        spanInst,
        'sd_adQF4BbMcrgqUGxs'
      );
    }
  }

  async sd_KFilNByKtBNlHtdR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KFilNByKtBNlHtdR',
      parentSpanInst
    );
    try {
      console.log(bh.local?.result);
      bh.local.response = {
        status: process.env.SUCCESS_STATUS_CODE,
        response: bh.local?.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_nKJ5EvDXxCQ0ivYY(bh, parentSpanInst);
      //appendnew_next_sd_KFilNByKtBNlHtdR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KFilNByKtBNlHtdR',
        spanInst,
        'sd_KFilNByKtBNlHtdR'
      );
    }
  }

  async sd_nKJ5EvDXxCQ0ivYY(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.response.status)
        .send(bh.local.response.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nKJ5EvDXxCQ0ivYY');
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
  //appendnew_flow_edit_holiday_api_Catch
}
