// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class appointment {
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
    this.serviceName = 'appointment';
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
      instance = new appointment(
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
    //appendnew_flow_appointment_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: appointment');
    //appendnew_flow_appointment_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: appointment');

    this.app['post'](
      `${this.serviceBasePath}/appointment/post`,
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
          bh = await this.sd_x89l3M0uuqQX1zxx(bh, parentSpanInst);
          //appendnew_next_sd_o4pR8uMjdaFOj9z5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_o4pR8uMjdaFOj9z5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_appointment_HttpIn
  }
  //   service flows_appointment

  //appendnew_flow_appointment_start

  async sd_x89l3M0uuqQX1zxx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x89l3M0uuqQX1zxx',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);
      bh.local.statusCode = process.env.SUCCESS_STATUS_CODE;

      this.tracerService.sendData(spanInst, bh);
      await this.appointmentApiCall(bh, parentSpanInst);
      //appendnew_next_sd_x89l3M0uuqQX1zxx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x89l3M0uuqQX1zxx',
        spanInst,
        'sd_x89l3M0uuqQX1zxx'
      );
    }
  }

  async appointmentApiCall(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.input.body);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oQZ3n3cNV6LRh3uR');
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
  //appendnew_flow_appointment_Catch
}
