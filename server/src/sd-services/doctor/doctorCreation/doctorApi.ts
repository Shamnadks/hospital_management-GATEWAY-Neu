// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_lxfVH3wRqGdS2rpQ from './doctorService'; //_splitter_
//append_imports_end
export class doctorApi {
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
    this.serviceName = 'doctorApi';
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
      instance = new doctorApi(
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
    //appendnew_flow_doctorApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: doctorApi');
    //appendnew_flow_doctorApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: doctorApi');

    this.app['post'](
      `${this.serviceBasePath}/doctors/post`,
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
          bh = await this.sd_X8P7bWDdzr1hXTTt(bh, parentSpanInst);
          //appendnew_next_sd_iBzM9lrAtNqxYyPw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iBzM9lrAtNqxYyPw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_doctorApi_HttpIn
  }
  //   service flows_doctorApi

  //appendnew_flow_doctorApi_start

  async sd_X8P7bWDdzr1hXTTt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X8P7bWDdzr1hXTTt',
      parentSpanInst
    );
    try {
      // console.log(bh.input?.body)
      console.log('start');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4yHXfZRGHNgxxg3E(bh, parentSpanInst);
      //appendnew_next_sd_X8P7bWDdzr1hXTTt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X8P7bWDdzr1hXTTt',
        spanInst,
        'sd_X8P7bWDdzr1hXTTt'
      );
    }
  }

  async sd_4yHXfZRGHNgxxg3E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4yHXfZRGHNgxxg3E',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_lxfVH3wRqGdS2rpQInstance: SSD_SERVICE_ID_sd_lxfVH3wRqGdS2rpQ.doctorService =
        SSD_SERVICE_ID_sd_lxfVH3wRqGdS2rpQ.doctorService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_lxfVH3wRqGdS2rpQInstance.doctorService(
          spanInst,
          bh.input.body,
          undefined
        );
      bh.local.result = outputVariables.input.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0sgvSAgENBjfs5we(bh, parentSpanInst);
      //appendnew_next_sd_4yHXfZRGHNgxxg3E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4yHXfZRGHNgxxg3E',
        spanInst,
        'sd_4yHXfZRGHNgxxg3E'
      );
    }
  }

  async sd_0sgvSAgENBjfs5we(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0sgvSAgENBjfs5we',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: 200,
        message: bh.local.result,
      };
      console.log('success');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UyEo41l81UOcNYrx(bh, parentSpanInst);
      //appendnew_next_sd_0sgvSAgENBjfs5we
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0sgvSAgENBjfs5we',
        spanInst,
        'sd_0sgvSAgENBjfs5we'
      );
    }
  }

  async sd_UyEo41l81UOcNYrx(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UyEo41l81UOcNYrx');
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
        'sd_lMo9ShgDINOO2M31',
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
      return await this.errorHandler(bh, e, 'sd_RTJ4uN7GD1yH3ctt');
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
    const catchConnectedNodes = ['sd_lMo9ShgDINOO2M31', 'sd_RTJ4uN7GD1yH3ctt'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_doctorApi_Catch
}
