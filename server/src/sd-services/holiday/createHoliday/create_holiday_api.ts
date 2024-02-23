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
import * as SSD_SERVICE_ID_sd_pi5oPV7DScNxI5o3 from './create_holiday_service'; //_splitter_
//append_imports_end
export class create_holiday_api {
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
    this.serviceName = 'create_holiday_api';
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
      instance = new create_holiday_api(
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
    //appendnew_flow_create_holiday_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: create_holiday_api');
    //appendnew_flow_create_holiday_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: create_holiday_api');

    this.app['post'](
      `${this.serviceBasePath}/holiday/post`,
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
          bh = await this.sd_eomYAbdxmEVLMt7N(bh, parentSpanInst);
          //appendnew_next_sd_5sbIkjhxZcUejQFd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5sbIkjhxZcUejQFd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_create_holiday_api_HttpIn
  }
  //   service flows_create_holiday_api

  //appendnew_flow_create_holiday_api_start

  async sd_eomYAbdxmEVLMt7N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eomYAbdxmEVLMt7N',
      parentSpanInst
    );
    try {
      validateNode('_EN_6p5c4fcw8s', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_P3n6xhNOwCqSZ5sY(bh, parentSpanInst);
      //appendnew_next_sd_eomYAbdxmEVLMt7N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eomYAbdxmEVLMt7N',
        spanInst,
        'sd_eomYAbdxmEVLMt7N'
      );
    }
  }

  async sd_P3n6xhNOwCqSZ5sY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P3n6xhNOwCqSZ5sY',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_29pLPaCw9Dud3tax(bh, parentSpanInst);
      //appendnew_next_sd_P3n6xhNOwCqSZ5sY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P3n6xhNOwCqSZ5sY',
        spanInst,
        'sd_P3n6xhNOwCqSZ5sY'
      );
    }
  }

  async sd_29pLPaCw9Dud3tax(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_29pLPaCw9Dud3tax',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_pi5oPV7DScNxI5o3Instance: SSD_SERVICE_ID_sd_pi5oPV7DScNxI5o3.create_holiday_service =
        SSD_SERVICE_ID_sd_pi5oPV7DScNxI5o3.create_holiday_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_pi5oPV7DScNxI5o3Instance.sd_TAeFqxHrdRVlnmzU(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GQjmCrfr2H0ppgSk(bh, parentSpanInst);
      //appendnew_next_sd_29pLPaCw9Dud3tax
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_29pLPaCw9Dud3tax',
        spanInst,
        'sd_29pLPaCw9Dud3tax'
      );
    }
  }

  async sd_GQjmCrfr2H0ppgSk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GQjmCrfr2H0ppgSk',
      parentSpanInst
    );
    try {
      console.log(bh.local?.result);
      bh.local.response = {
        status: process.env.SUCCESS_STATUS_CODE,
        response: bh.local?.result?.data,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sA4zfeLUQ9MdSmSw(bh, parentSpanInst);
      //appendnew_next_sd_GQjmCrfr2H0ppgSk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GQjmCrfr2H0ppgSk',
        spanInst,
        'sd_GQjmCrfr2H0ppgSk'
      );
    }
  }

  async sd_sA4zfeLUQ9MdSmSw(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.response.status)
        .send(bh.local.response.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sA4zfeLUQ9MdSmSw');
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
        'sd_1Ioy3hcNAnPcBCbr',
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
      return await this.errorHandler(bh, e, 'sd_wfbNcxBHvRYJDppw');
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
    const catchConnectedNodes = ['sd_1Ioy3hcNAnPcBCbr', 'sd_wfbNcxBHvRYJDppw'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorInfo(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_create_holiday_api_Catch
}
