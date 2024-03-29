// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Sajp3IPpjYinIWYb from './patientUpdateServer'; //_splitter_
//append_imports_end
export class patientUpdateApi {
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
    this.serviceName = 'patientUpdateApi';
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
      instance = new patientUpdateApi(
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
    //appendnew_flow_patientUpdateApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: patientUpdateApi');
    //appendnew_flow_patientUpdateApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: patientUpdateApi');

    this.app['put'](
      `${this.serviceBasePath}/patient/put`,
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
          bh = await this.sd_Mfq2vF7CpjdxoBYS(bh, parentSpanInst);
          //appendnew_next_sd_CeMd1pKYteisFuWc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CeMd1pKYteisFuWc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_patientUpdateApi_HttpIn
  }
  //   service flows_patientUpdateApi

  //appendnew_flow_patientUpdateApi_start

  async sd_Mfq2vF7CpjdxoBYS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mfq2vF7CpjdxoBYS',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Sajp3IPpjYinIWYbInstance: SSD_SERVICE_ID_sd_Sajp3IPpjYinIWYb.patientUpdateServer =
        SSD_SERVICE_ID_sd_Sajp3IPpjYinIWYb.patientUpdateServer.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Sajp3IPpjYinIWYbInstance.patientStatusUpdate(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseData(bh, parentSpanInst);
      //appendnew_next_sd_Mfq2vF7CpjdxoBYS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mfq2vF7CpjdxoBYS',
        spanInst,
        'sd_Mfq2vF7CpjdxoBYS'
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
        message: 'success',
        response: bh.local?.result?.payload,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.statusUpdateResponse(bh, parentSpanInst);
      //appendnew_next_responseData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5w9jujtH5wLTqFGj',
        spanInst,
        'responseData'
      );
    }
  }

  async statusUpdateResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Jhn7LjxiqQpgOcfk');
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
        'sd_dUD5TGq9c0m55bjM',
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
      return await this.errorHandler(bh, e, 'sd_NrZEow5FKVxbZpph');
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
    const catchConnectedNodes = ['sd_dUD5TGq9c0m55bjM', 'sd_NrZEow5FKVxbZpph'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_patientUpdateApi_Catch
}
