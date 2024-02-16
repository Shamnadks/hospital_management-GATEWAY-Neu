// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_CXGNBitJ8i2Oql13 from './updateDepartmentService'; //_splitter_
//append_imports_end
export class updateDepartmentApi {
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
    this.serviceName = 'updateDepartmentApi';
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
      instance = new updateDepartmentApi(
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
    //appendnew_flow_updateDepartmentApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateDepartmentApi');
    //appendnew_flow_updateDepartmentApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateDepartmentApi');

    this.app['put'](
      `${this.serviceBasePath}/department/put`,
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
          bh = await this.sd_zCCP7aGWxqUpAT2F(bh, parentSpanInst);
          //appendnew_next_sd_vVGKR48i2Du1V8dn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vVGKR48i2Du1V8dn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_updateDepartmentApi_HttpIn
  }
  //   service flows_updateDepartmentApi

  //appendnew_flow_updateDepartmentApi_start

  async sd_zCCP7aGWxqUpAT2F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zCCP7aGWxqUpAT2F',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CXGNBitJ8i2Oql13Instance: SSD_SERVICE_ID_sd_CXGNBitJ8i2Oql13.updateDepartmentService =
        SSD_SERVICE_ID_sd_CXGNBitJ8i2Oql13.updateDepartmentService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CXGNBitJ8i2Oql13Instance.departmentUpdateService(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseData(bh, parentSpanInst);
      //appendnew_next_sd_zCCP7aGWxqUpAT2F
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zCCP7aGWxqUpAT2F',
        spanInst,
        'sd_zCCP7aGWxqUpAT2F'
      );
    }
  }

  async responseData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseData',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: bh.local.result.payload.statusCode,
        response: bh.local.result?.payload?.data,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.updationResponse(bh, parentSpanInst);
      //appendnew_next_responseData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U06j3JKG0a5ZqcDC',
        spanInst,
        'responseData'
      );
    }
  }

  async updationResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9psPmlTR1EHZVaLT');
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
        'sd_pfxh1Cph1O0LSggG',
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
      return await this.errorHandler(bh, e, 'sd_g2jyRiSi4ZqPu50s');
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
    const catchConnectedNodes = ['sd_pfxh1Cph1O0LSggG', 'sd_g2jyRiSi4ZqPu50s'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_updateDepartmentApi_Catch
}
