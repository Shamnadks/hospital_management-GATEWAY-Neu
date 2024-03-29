// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_VVv6JZ6ue70O2tjZ from './patientListService'; //_splitter_
//append_imports_end
export class patientListApi {
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
    this.serviceName = 'patientListApi';
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
      instance = new patientListApi(
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
    //appendnew_flow_patientListApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: patientListApi');
    //appendnew_flow_patientListApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: patientListApi');

    this.app['get'](
      `${this.serviceBasePath}/patients`,
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
          bh = await this.sd_EL7u4Ij2hFPz2DHs(bh, parentSpanInst);
          //appendnew_next_sd_YOxrZLE8GZ4KeDVv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YOxrZLE8GZ4KeDVv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_patientListApi_HttpIn
  }
  //   service flows_patientListApi

  //appendnew_flow_patientListApi_start

  async sd_EL7u4Ij2hFPz2DHs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EL7u4Ij2hFPz2DHs',
      parentSpanInst
    );
    try {
      console.log('hello patientList');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SkMIkMswp1s0FGt2(bh, parentSpanInst);
      //appendnew_next_sd_EL7u4Ij2hFPz2DHs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EL7u4Ij2hFPz2DHs',
        spanInst,
        'sd_EL7u4Ij2hFPz2DHs'
      );
    }
  }

  async sd_SkMIkMswp1s0FGt2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SkMIkMswp1s0FGt2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_VVv6JZ6ue70O2tjZInstance: SSD_SERVICE_ID_sd_VVv6JZ6ue70O2tjZ.patientListService =
        SSD_SERVICE_ID_sd_VVv6JZ6ue70O2tjZ.patientListService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_VVv6JZ6ue70O2tjZInstance.patientListService(
          spanInst,
          bh.input.query
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseData(bh, parentSpanInst);
      //appendnew_next_sd_SkMIkMswp1s0FGt2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SkMIkMswp1s0FGt2',
        spanInst,
        'sd_SkMIkMswp1s0FGt2'
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
        status: 200,
        response: bh.local?.result?.payload?.data,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mRlgqsFGUr7OAukR(bh, parentSpanInst);
      //appendnew_next_responseData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZfY2xWev8P3vZzSP',
        spanInst,
        'responseData'
      );
    }
  }

  async sd_mRlgqsFGUr7OAukR(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mRlgqsFGUr7OAukR');
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
        'sd_xu2IDlrcxdALmBlJ',
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
      return await this.errorHandler(bh, e, 'sd_rrh7TKEluCmshBEF');
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
    const catchConnectedNodes = ['sd_xu2IDlrcxdALmBlJ', 'sd_rrh7TKEluCmshBEF'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_patientListApi_Catch
}
