// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_wodP8aUqBpp4AwbI from './filterDepartmentService'; //_splitter_
//append_imports_end
export class filterDepartmentApi {
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
    this.serviceName = 'filterDepartmentApi';
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
      instance = new filterDepartmentApi(
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
    //appendnew_flow_filterDepartmentApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: filterDepartmentApi');
    //appendnew_flow_filterDepartmentApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: filterDepartmentApi');

    this.app['get'](
      `${this.serviceBasePath}/department-filter/get`,
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
          bh = await this.sd_KIM0KIc7pcXWT2lu(bh, parentSpanInst);
          //appendnew_next_sd_VuYC7ggQ8IVBXptd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VuYC7ggQ8IVBXptd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_filterDepartmentApi_HttpIn
  }
  //   service flows_filterDepartmentApi

  //appendnew_flow_filterDepartmentApi_start

  async sd_KIM0KIc7pcXWT2lu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KIM0KIc7pcXWT2lu',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_wodP8aUqBpp4AwbIInstance: SSD_SERVICE_ID_sd_wodP8aUqBpp4AwbI.filterDepartmentService =
        SSD_SERVICE_ID_sd_wodP8aUqBpp4AwbI.filterDepartmentService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_wodP8aUqBpp4AwbIInstance.filterDepartmentService(
          spanInst,
          bh.input.query,
          undefined
        );
      bh.local.result = outputVariables.input.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseData(bh, parentSpanInst);
      //appendnew_next_sd_KIM0KIc7pcXWT2lu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KIM0KIc7pcXWT2lu',
        spanInst,
        'sd_KIM0KIc7pcXWT2lu'
      );
    }
  }

  async responseData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseData',
      parentSpanInst
    );
    try {
      console.log('bh.local?.result');
      console.log('kjkjkjkj');
      bh.local.response = {
        status: process.env.SUCCESS_STATUS_CODE,
        message: process.env.SUCCESS_MESSAGE,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hkwQ9a362ym3pROe(bh, parentSpanInst);
      //appendnew_next_responseData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4kDUz83rjLwRgKMS',
        spanInst,
        'responseData'
      );
    }
  }

  async sd_hkwQ9a362ym3pROe(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hkwQ9a362ym3pROe');
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
  //appendnew_flow_filterDepartmentApi_Catch
}
