// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_F58XlOhAZ8F4OeRg from './doctorFilterService'; //_splitter_
//append_imports_end
export class doctorFilterApi {
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
    this.serviceName = 'doctorFilterApi';
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
      instance = new doctorFilterApi(
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
    //appendnew_flow_doctorFilterApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: doctorFilterApi');
    //appendnew_flow_doctorFilterApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: doctorFilterApi');

    this.app['get'](
      `${this.serviceBasePath}/doctor/get`,
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
          bh = await this.sd_AuUN4qxzC4UEKnlh(bh, parentSpanInst);
          //appendnew_next_sd_gM6LLOgYgYi63NqC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gM6LLOgYgYi63NqC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_doctorFilterApi_HttpIn
  }
  //   service flows_doctorFilterApi

  //appendnew_flow_doctorFilterApi_start

  async sd_AuUN4qxzC4UEKnlh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AuUN4qxzC4UEKnlh',
      parentSpanInst
    );
    try {
      console.log('hi');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_U8vGHS7POCTloCbP(bh, parentSpanInst);
      //appendnew_next_sd_AuUN4qxzC4UEKnlh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AuUN4qxzC4UEKnlh',
        spanInst,
        'sd_AuUN4qxzC4UEKnlh'
      );
    }
  }

  async sd_U8vGHS7POCTloCbP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U8vGHS7POCTloCbP',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_F58XlOhAZ8F4OeRgInstance: SSD_SERVICE_ID_sd_F58XlOhAZ8F4OeRg.doctorFilterService =
        SSD_SERVICE_ID_sd_F58XlOhAZ8F4OeRg.doctorFilterService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_F58XlOhAZ8F4OeRgInstance.filterDepartmentService(
          spanInst,
          bh.input.query
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseData(bh, parentSpanInst);
      //appendnew_next_sd_U8vGHS7POCTloCbP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U8vGHS7POCTloCbP',
        spanInst,
        'sd_U8vGHS7POCTloCbP'
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
        message: bh.local?.result?.payload.data,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_y31yN3xIxL58WvLj(bh, parentSpanInst);
      //appendnew_next_responseData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9LJOFmMqXiALTNrq',
        spanInst,
        'responseData'
      );
    }
  }

  async sd_y31yN3xIxL58WvLj(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y31yN3xIxL58WvLj');
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
        'sd_oH1NfLgBGOIyO7vw',
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
      return await this.errorHandler(bh, e, 'sd_drS28p4KhmA5ZBvr');
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
    const catchConnectedNodes = ['sd_oH1NfLgBGOIyO7vw', 'sd_drS28p4KhmA5ZBvr'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_doctorFilterApi_Catch
}
