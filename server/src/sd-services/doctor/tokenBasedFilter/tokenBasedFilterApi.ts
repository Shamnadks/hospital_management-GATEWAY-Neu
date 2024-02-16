// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_3btD3LlcSg9QwlEz from './tokenBasedFilterService'; //_splitter_
//append_imports_end
export class tokenBasedFilterApi {
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
    this.serviceName = 'tokenBasedFilterApi';
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
      instance = new tokenBasedFilterApi(
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
    //appendnew_flow_tokenBasedFilterApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: tokenBasedFilterApi');
    //appendnew_flow_tokenBasedFilterApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: tokenBasedFilterApi');

    this.app['get'](
      `${this.serviceBasePath}/token/get`,
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
          bh = await this.sd_jcHIN9CPfoc8EjZL(bh, parentSpanInst);
          //appendnew_next_sd_dLjZuvBg70wA6vJB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dLjZuvBg70wA6vJB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_tokenBasedFilterApi_HttpIn
  }
  //   service flows_tokenBasedFilterApi

  //appendnew_flow_tokenBasedFilterApi_start

  async sd_jcHIN9CPfoc8EjZL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jcHIN9CPfoc8EjZL',
      parentSpanInst
    );
    try {
      console.log('hiiii');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jF1HwsKMdZUKGutf(bh, parentSpanInst);
      //appendnew_next_sd_jcHIN9CPfoc8EjZL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jcHIN9CPfoc8EjZL',
        spanInst,
        'sd_jcHIN9CPfoc8EjZL'
      );
    }
  }

  async sd_jF1HwsKMdZUKGutf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jF1HwsKMdZUKGutf',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_3btD3LlcSg9QwlEzInstance: SSD_SERVICE_ID_sd_3btD3LlcSg9QwlEz.tokenBasedFilterService =
        SSD_SERVICE_ID_sd_3btD3LlcSg9QwlEz.tokenBasedFilterService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_3btD3LlcSg9QwlEzInstance.filterDepartmentService(
          spanInst,
          bh.input.query
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseData(bh, parentSpanInst);
      //appendnew_next_sd_jF1HwsKMdZUKGutf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jF1HwsKMdZUKGutf',
        spanInst,
        'sd_jF1HwsKMdZUKGutf'
      );
    }
  }

  async responseData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseData',
      parentSpanInst
    );
    try {
      console.log(bh.local?.result?.payload);
      console.log('kjkjkjkj');
      bh.local.response = {
        status: process.env.SUCCESS_STATUS_CODE,
        response: bh.local?.result?.payload,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9sXj65KhXdQ0lqcu(bh, parentSpanInst);
      //appendnew_next_responseData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q0C5NwcXIUOZNc47',
        spanInst,
        'responseData'
      );
    }
  }

  async sd_9sXj65KhXdQ0lqcu(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9sXj65KhXdQ0lqcu');
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
        'sd_jc5yimmfQ7EsgSRe',
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
      return await this.errorHandler(bh, e, 'sd_v96Hvlr7qmw1aGTp');
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
    const catchConnectedNodes = ['sd_jc5yimmfQ7EsgSRe', 'sd_v96Hvlr7qmw1aGTp'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_tokenBasedFilterApi_Catch
}
