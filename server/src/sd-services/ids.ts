// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_CBgLAFnpfXPJux1R from './idsutil'; //_splitter_
//append_imports_end
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_lvBsWLfHTYGEN8n3(bh, parentSpanInst);
          //appendnew_next_sd_EQI0A2izEE0EOScy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EQI0A2izEE0EOScy');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_DVR8mkm1XcsgISsC(bh, parentSpanInst);
          //appendnew_next_sd_gsQmc1V84NFCTuQh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gsQmc1V84NFCTuQh');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_NjbPOU9w7qpjiuXg(bh, parentSpanInst);
          //appendnew_next_sd_Z3ZzPV39CbdOfIOw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Z3ZzPV39CbdOfIOw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_n1KuTdqLTltTv3Sx(bh, parentSpanInst);
          //appendnew_next_sd_OAJB5n0JnIpMB2VI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OAJB5n0JnIpMB2VI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
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
          bh = await this.sd_9Q35xDfMoh6NsTMi(bh, parentSpanInst);
          //appendnew_next_sd_lj0AkAWa3E1YhOHC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lj0AkAWa3E1YhOHC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_6ebOzIKAFhU7jTuN(bh, parentSpanInst);
          //appendnew_next_sd_Mbh1waYbNfB0IfwG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Mbh1waYbNfB0IfwG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_PZDWTjxJAiEfMP7B(bh, parentSpanInst);
          //appendnew_next_sd_N3y6yA7K3KGyGfwz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_N3y6yA7K3KGyGfwz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_NjbPOU9w7qpjiuXg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NjbPOU9w7qpjiuXg',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_46lME6iGEr3G1xvz(bh, parentSpanInst);
      //appendnew_next_sd_NjbPOU9w7qpjiuXg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NjbPOU9w7qpjiuXg',
        spanInst,
        'sd_NjbPOU9w7qpjiuXg'
      );
    }
  }

  async sd_46lME6iGEr3G1xvz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_46lME6iGEr3G1xvz',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_57CRuiajOwPR2GB7(bh, parentSpanInst);
      } else {
        bh = await this.sd_3qb6snuafgBSNiwl(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_46lME6iGEr3G1xvz',
        spanInst,
        'sd_46lME6iGEr3G1xvz'
      );
    }
  }

  async sd_57CRuiajOwPR2GB7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_57CRuiajOwPR2GB7',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uc1SExCEBdtaR2kQ(bh, parentSpanInst);
      //appendnew_next_sd_57CRuiajOwPR2GB7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_57CRuiajOwPR2GB7',
        spanInst,
        'sd_57CRuiajOwPR2GB7'
      );
    }
  }

  async sd_uc1SExCEBdtaR2kQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uc1SExCEBdtaR2kQ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TGxHHI0NnAykNSNY(bh, parentSpanInst);
      //appendnew_next_sd_uc1SExCEBdtaR2kQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uc1SExCEBdtaR2kQ',
        spanInst,
        'sd_uc1SExCEBdtaR2kQ'
      );
    }
  }

  async sd_TGxHHI0NnAykNSNY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TGxHHI0NnAykNSNY',
      parentSpanInst
    );
    try {
      const sd_CBgLAFnpfXPJux1RInstance: sd_CBgLAFnpfXPJux1R.idsutil =
        sd_CBgLAFnpfXPJux1R.idsutil.getInstance();
      let outputVariables =
        await sd_CBgLAFnpfXPJux1RInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_U3D56TLMatNVz4YG(bh, parentSpanInst);
      //appendnew_next_sd_TGxHHI0NnAykNSNY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TGxHHI0NnAykNSNY',
        spanInst,
        'sd_TGxHHI0NnAykNSNY'
      );
    }
  }

  async sd_U3D56TLMatNVz4YG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U3D56TLMatNVz4YG',
      parentSpanInst
    );
    try {
      const sd_CBgLAFnpfXPJux1RInstance: sd_CBgLAFnpfXPJux1R.idsutil =
        sd_CBgLAFnpfXPJux1R.idsutil.getInstance();
      let outputVariables =
        await sd_CBgLAFnpfXPJux1RInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S8l70AiLl5GVSvhD(bh, parentSpanInst);
      //appendnew_next_sd_U3D56TLMatNVz4YG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U3D56TLMatNVz4YG',
        spanInst,
        'sd_U3D56TLMatNVz4YG'
      );
    }
  }

  async sd_S8l70AiLl5GVSvhD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S8l70AiLl5GVSvhD',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_27zlcyngKdEKknpt(bh, parentSpanInst);
      //appendnew_next_sd_S8l70AiLl5GVSvhD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S8l70AiLl5GVSvhD',
        spanInst,
        'sd_S8l70AiLl5GVSvhD'
      );
    }
  }

  async sd_27zlcyngKdEKknpt(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_27zlcyngKdEKknpt');
    }
  }

  async sd_3qb6snuafgBSNiwl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3qb6snuafgBSNiwl',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mKTN1wJ5VDHspyeH(bh, parentSpanInst);
      //appendnew_next_sd_3qb6snuafgBSNiwl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3qb6snuafgBSNiwl',
        spanInst,
        'sd_3qb6snuafgBSNiwl'
      );
    }
  }

  async sd_mKTN1wJ5VDHspyeH(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mKTN1wJ5VDHspyeH');
    }
  }

  async sd_lvBsWLfHTYGEN8n3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lvBsWLfHTYGEN8n3',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ty4J3TpsEad9Y5ku(bh, parentSpanInst);
      //appendnew_next_sd_lvBsWLfHTYGEN8n3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lvBsWLfHTYGEN8n3',
        spanInst,
        'sd_lvBsWLfHTYGEN8n3'
      );
    }
  }

  async sd_ty4J3TpsEad9Y5ku(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ty4J3TpsEad9Y5ku',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ty4J3TpsEad9Y5ku',
        spanInst,
        'sd_ty4J3TpsEad9Y5ku'
      );
    }
  }

  async sd_n1KuTdqLTltTv3Sx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n1KuTdqLTltTv3Sx',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_U1TBSpxnHfTFg0Fl(bh, parentSpanInst);
      //appendnew_next_sd_n1KuTdqLTltTv3Sx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n1KuTdqLTltTv3Sx',
        spanInst,
        'sd_n1KuTdqLTltTv3Sx'
      );
    }
  }

  async sd_U1TBSpxnHfTFg0Fl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U1TBSpxnHfTFg0Fl',
      parentSpanInst
    );
    try {
      const sd_CBgLAFnpfXPJux1RInstance: sd_CBgLAFnpfXPJux1R.idsutil =
        sd_CBgLAFnpfXPJux1R.idsutil.getInstance();
      let outputVariables =
        await sd_CBgLAFnpfXPJux1RInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jjU4lC0KeWk7Ayby(bh, parentSpanInst);
      //appendnew_next_sd_U1TBSpxnHfTFg0Fl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U1TBSpxnHfTFg0Fl',
        spanInst,
        'sd_U1TBSpxnHfTFg0Fl'
      );
    }
  }

  async sd_jjU4lC0KeWk7Ayby(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jjU4lC0KeWk7Ayby',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4hQUQZAmCPk7lilZ(bh, parentSpanInst);
      //appendnew_next_sd_jjU4lC0KeWk7Ayby
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jjU4lC0KeWk7Ayby',
        spanInst,
        'sd_jjU4lC0KeWk7Ayby'
      );
    }
  }

  async sd_4hQUQZAmCPk7lilZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4hQUQZAmCPk7lilZ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1yqkL7M79TXUitr0(bh, parentSpanInst);
      //appendnew_next_sd_4hQUQZAmCPk7lilZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4hQUQZAmCPk7lilZ',
        spanInst,
        'sd_4hQUQZAmCPk7lilZ'
      );
    }
  }

  async sd_1yqkL7M79TXUitr0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1yqkL7M79TXUitr0',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jgUd80RJ7JX1Xfhi(bh, parentSpanInst);
      } else {
        bh = await this.sd_c5oFQy5ln0TxHQj5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1yqkL7M79TXUitr0',
        spanInst,
        'sd_1yqkL7M79TXUitr0'
      );
    }
  }

  async sd_jgUd80RJ7JX1Xfhi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jgUd80RJ7JX1Xfhi',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jUDzIs3Kse9gfkRv(bh, parentSpanInst);
      //appendnew_next_sd_jgUd80RJ7JX1Xfhi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jgUd80RJ7JX1Xfhi',
        spanInst,
        'sd_jgUd80RJ7JX1Xfhi'
      );
    }
  }

  async sd_jUDzIs3Kse9gfkRv(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jUDzIs3Kse9gfkRv');
    }
  }

  async sd_c5oFQy5ln0TxHQj5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c5oFQy5ln0TxHQj5',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Ou0Cf95qXb2KzKNv(bh, parentSpanInst);
      //appendnew_next_sd_c5oFQy5ln0TxHQj5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c5oFQy5ln0TxHQj5',
        spanInst,
        'sd_c5oFQy5ln0TxHQj5'
      );
    }
  }

  async sd_Ou0Cf95qXb2KzKNv(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ou0Cf95qXb2KzKNv');
    }
  }

  async sd_9Q35xDfMoh6NsTMi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9Q35xDfMoh6NsTMi',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_2x08fuqxU5U1sn9Q(bh, parentSpanInst);
      //appendnew_next_sd_9Q35xDfMoh6NsTMi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Q35xDfMoh6NsTMi',
        spanInst,
        'sd_9Q35xDfMoh6NsTMi'
      );
    }
  }

  async sd_2x08fuqxU5U1sn9Q(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2x08fuqxU5U1sn9Q');
    }
  }

  async sd_taYnQ5DmvuCerihN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_taYnQ5DmvuCerihN',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_taYnQ5DmvuCerihN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_taYnQ5DmvuCerihN',
        spanInst,
        'sd_taYnQ5DmvuCerihN'
      );
    }
  }

  async sd_6ebOzIKAFhU7jTuN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6ebOzIKAFhU7jTuN',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cRTqr5sU4wuTMrBt(bh, parentSpanInst);
      //appendnew_next_sd_6ebOzIKAFhU7jTuN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6ebOzIKAFhU7jTuN',
        spanInst,
        'sd_6ebOzIKAFhU7jTuN'
      );
    }
  }

  async sd_cRTqr5sU4wuTMrBt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cRTqr5sU4wuTMrBt',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_s66nLMUamgJlRGVH(bh, parentSpanInst);
      //appendnew_next_sd_cRTqr5sU4wuTMrBt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cRTqr5sU4wuTMrBt',
        spanInst,
        'sd_cRTqr5sU4wuTMrBt'
      );
    }
  }

  async sd_s66nLMUamgJlRGVH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s66nLMUamgJlRGVH',
      parentSpanInst
    );
    try {
      const sd_CBgLAFnpfXPJux1RInstance: sd_CBgLAFnpfXPJux1R.idsutil =
        sd_CBgLAFnpfXPJux1R.idsutil.getInstance();
      let outputVariables =
        await sd_CBgLAFnpfXPJux1RInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gL1Ly6L3IGWBG5lc(bh, parentSpanInst);
      //appendnew_next_sd_s66nLMUamgJlRGVH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s66nLMUamgJlRGVH',
        spanInst,
        'sd_s66nLMUamgJlRGVH'
      );
    }
  }

  async sd_gL1Ly6L3IGWBG5lc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gL1Ly6L3IGWBG5lc',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_01jsfX1Ry7oet8IP(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_qOSKN4JpgjGYJmPr(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gL1Ly6L3IGWBG5lc',
        spanInst,
        'sd_gL1Ly6L3IGWBG5lc'
      );
    }
  }

  async sd_01jsfX1Ry7oet8IP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_01jsfX1Ry7oet8IP',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_01jsfX1Ry7oet8IP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_01jsfX1Ry7oet8IP',
        spanInst,
        'sd_01jsfX1Ry7oet8IP'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Rt0nPDjhQ7iOxAFC(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_Rt0nPDjhQ7iOxAFC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Rt0nPDjhQ7iOxAFC');
    }
  }

  async sd_qOSKN4JpgjGYJmPr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qOSKN4JpgjGYJmPr',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Rt0nPDjhQ7iOxAFC(bh, parentSpanInst);
      //appendnew_next_sd_qOSKN4JpgjGYJmPr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qOSKN4JpgjGYJmPr',
        spanInst,
        'sd_qOSKN4JpgjGYJmPr'
      );
    }
  }

  async sd_PZDWTjxJAiEfMP7B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PZDWTjxJAiEfMP7B',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JKazZ55tFvS11DdT(bh, parentSpanInst);
      //appendnew_next_sd_PZDWTjxJAiEfMP7B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PZDWTjxJAiEfMP7B',
        spanInst,
        'sd_PZDWTjxJAiEfMP7B'
      );
    }
  }

  async sd_JKazZ55tFvS11DdT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JKazZ55tFvS11DdT',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_FHmcLQ8e8CFK6Hi1(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_S7ReTIX7N4S0t5d5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JKazZ55tFvS11DdT',
        spanInst,
        'sd_JKazZ55tFvS11DdT'
      );
    }
  }

  async sd_FHmcLQ8e8CFK6Hi1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FHmcLQ8e8CFK6Hi1',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CuKJXpHOkIbHlLIO(bh, parentSpanInst);
      //appendnew_next_sd_FHmcLQ8e8CFK6Hi1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FHmcLQ8e8CFK6Hi1',
        spanInst,
        'sd_FHmcLQ8e8CFK6Hi1'
      );
    }
  }

  async sd_CuKJXpHOkIbHlLIO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CuKJXpHOkIbHlLIO');
    }
  }

  async sd_S7ReTIX7N4S0t5d5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S7ReTIX7N4S0t5d5',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ek5wXCsYMn1wf7Pv(bh, parentSpanInst);
      //appendnew_next_sd_S7ReTIX7N4S0t5d5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S7ReTIX7N4S0t5d5',
        spanInst,
        'sd_S7ReTIX7N4S0t5d5'
      );
    }
  }

  async sd_ek5wXCsYMn1wf7Pv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ek5wXCsYMn1wf7Pv',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IRZ5e9nKJNtYtn5h(bh, parentSpanInst);
      //appendnew_next_sd_ek5wXCsYMn1wf7Pv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ek5wXCsYMn1wf7Pv',
        spanInst,
        'sd_ek5wXCsYMn1wf7Pv'
      );
    }
  }

  async sd_IRZ5e9nKJNtYtn5h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IRZ5e9nKJNtYtn5h',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_kcQ3thKBTYIuDzUQ(bh, parentSpanInst);
      } else {
        bh = await this.sd_BbvWPSVfZRmEfVlp(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IRZ5e9nKJNtYtn5h',
        spanInst,
        'sd_IRZ5e9nKJNtYtn5h'
      );
    }
  }

  async sd_kcQ3thKBTYIuDzUQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kcQ3thKBTYIuDzUQ',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pMnaminohFFEhq4r(bh, parentSpanInst);
      //appendnew_next_sd_kcQ3thKBTYIuDzUQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kcQ3thKBTYIuDzUQ',
        spanInst,
        'sd_kcQ3thKBTYIuDzUQ'
      );
    }
  }

  async sd_pMnaminohFFEhq4r(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pMnaminohFFEhq4r');
    }
  }

  async sd_BbvWPSVfZRmEfVlp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BbvWPSVfZRmEfVlp',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YgKOhcuVhDeF260q(bh, parentSpanInst);
      //appendnew_next_sd_BbvWPSVfZRmEfVlp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BbvWPSVfZRmEfVlp',
        spanInst,
        'sd_BbvWPSVfZRmEfVlp'
      );
    }
  }

  async sd_YgKOhcuVhDeF260q(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YgKOhcuVhDeF260q');
    }
  }

  async sd_DVR8mkm1XcsgISsC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DVR8mkm1XcsgISsC',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HqUeLEDkxDIwWDkt(bh, parentSpanInst);
      //appendnew_next_sd_DVR8mkm1XcsgISsC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DVR8mkm1XcsgISsC',
        spanInst,
        'sd_DVR8mkm1XcsgISsC'
      );
    }
  }

  async sd_HqUeLEDkxDIwWDkt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HqUeLEDkxDIwWDkt',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kQ0J6vfErWhnXSfK(bh, parentSpanInst);
      //appendnew_next_sd_HqUeLEDkxDIwWDkt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HqUeLEDkxDIwWDkt',
        spanInst,
        'sd_HqUeLEDkxDIwWDkt'
      );
    }
  }

  async sd_kQ0J6vfErWhnXSfK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kQ0J6vfErWhnXSfK',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3meWPsPuwd6gKAfi(bh, parentSpanInst);
      //appendnew_next_sd_kQ0J6vfErWhnXSfK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kQ0J6vfErWhnXSfK',
        spanInst,
        'sd_kQ0J6vfErWhnXSfK'
      );
    }
  }

  async sd_3meWPsPuwd6gKAfi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3meWPsPuwd6gKAfi',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wLm2WeEcdy1VzXhO(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_Fx6yzBtot3z4PTUn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3meWPsPuwd6gKAfi',
        spanInst,
        'sd_3meWPsPuwd6gKAfi'
      );
    }
  }

  async sd_wLm2WeEcdy1VzXhO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wLm2WeEcdy1VzXhO',
      parentSpanInst
    );
    try {
      const sd_CBgLAFnpfXPJux1RInstance: sd_CBgLAFnpfXPJux1R.idsutil =
        sd_CBgLAFnpfXPJux1R.idsutil.getInstance();
      let outputVariables = await sd_CBgLAFnpfXPJux1RInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FiUBtZGii26IU2Ri(bh, parentSpanInst);
      //appendnew_next_sd_wLm2WeEcdy1VzXhO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wLm2WeEcdy1VzXhO',
        spanInst,
        'sd_wLm2WeEcdy1VzXhO'
      );
    }
  }

  async sd_FiUBtZGii26IU2Ri(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FiUBtZGii26IU2Ri',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PGUcAAOU0fkzyb60(bh, parentSpanInst);
      } else {
        bh = await this.sd_0KTXg1iNbOFK6nce(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FiUBtZGii26IU2Ri',
        spanInst,
        'sd_FiUBtZGii26IU2Ri'
      );
    }
  }

  async sd_PGUcAAOU0fkzyb60(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PGUcAAOU0fkzyb60',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aXZUSwx3VXhmRNuO(bh, parentSpanInst);
      //appendnew_next_sd_PGUcAAOU0fkzyb60
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PGUcAAOU0fkzyb60',
        spanInst,
        'sd_PGUcAAOU0fkzyb60'
      );
    }
  }

  async sd_aXZUSwx3VXhmRNuO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aXZUSwx3VXhmRNuO',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_QaVlrneXfcejyJER(bh, parentSpanInst);
      //appendnew_next_sd_aXZUSwx3VXhmRNuO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aXZUSwx3VXhmRNuO',
        spanInst,
        'sd_aXZUSwx3VXhmRNuO'
      );
    }
  }

  async sd_QaVlrneXfcejyJER(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QaVlrneXfcejyJER');
    }
  }

  async sd_0KTXg1iNbOFK6nce(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0KTXg1iNbOFK6nce',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dZPrFPMJxCEAuRSE(bh, parentSpanInst);
      } else {
        bh = await this.sd_PDo5PSB61QFDIe1y(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0KTXg1iNbOFK6nce',
        spanInst,
        'sd_0KTXg1iNbOFK6nce'
      );
    }
  }

  async sd_dZPrFPMJxCEAuRSE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dZPrFPMJxCEAuRSE',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DdzG2PkZdHMgfjqv(bh, parentSpanInst);
      //appendnew_next_sd_dZPrFPMJxCEAuRSE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dZPrFPMJxCEAuRSE',
        spanInst,
        'sd_dZPrFPMJxCEAuRSE'
      );
    }
  }

  async sd_DdzG2PkZdHMgfjqv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DdzG2PkZdHMgfjqv',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PDo5PSB61QFDIe1y(bh, parentSpanInst);
      //appendnew_next_sd_DdzG2PkZdHMgfjqv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DdzG2PkZdHMgfjqv',
        spanInst,
        'sd_DdzG2PkZdHMgfjqv'
      );
    }
  }

  async sd_PDo5PSB61QFDIe1y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PDo5PSB61QFDIe1y',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PDo5PSB61QFDIe1y',
        spanInst,
        'sd_PDo5PSB61QFDIe1y'
      );
    }
  }

  async sd_Fx6yzBtot3z4PTUn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fx6yzBtot3z4PTUn',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gCbZBIZoigo2MUyt(bh, parentSpanInst);
      } else {
        bh = await this.sd_KoGrN1HCkjOEMybb(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fx6yzBtot3z4PTUn',
        spanInst,
        'sd_Fx6yzBtot3z4PTUn'
      );
    }
  }

  async sd_gCbZBIZoigo2MUyt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gCbZBIZoigo2MUyt',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_QaVlrneXfcejyJER(bh, parentSpanInst);
      //appendnew_next_sd_gCbZBIZoigo2MUyt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gCbZBIZoigo2MUyt',
        spanInst,
        'sd_gCbZBIZoigo2MUyt'
      );
    }
  }

  async sd_KoGrN1HCkjOEMybb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KoGrN1HCkjOEMybb',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_QaVlrneXfcejyJER(bh, parentSpanInst);
      //appendnew_next_sd_KoGrN1HCkjOEMybb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KoGrN1HCkjOEMybb',
        spanInst,
        'sd_KoGrN1HCkjOEMybb'
      );
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
      (await this.sd_CmW5ZGyjKErnV13o(bh, parentSpanInst)) ||
      (await this.sd_qyIVGQUCsbZpYd3c(bh, parentSpanInst))
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
  async sd_CmW5ZGyjKErnV13o(bh, parentSpanInst) {
    const nodes = [
      'sd_U3D56TLMatNVz4YG',
      'sd_OAJB5n0JnIpMB2VI',
      'sd_U1TBSpxnHfTFg0Fl',
      'sd_jjU4lC0KeWk7Ayby',
      'sd_n1KuTdqLTltTv3Sx',
      'sd_1yqkL7M79TXUitr0',
      'sd_jgUd80RJ7JX1Xfhi',
      'sd_c5oFQy5ln0TxHQj5',
      'sd_jUDzIs3Kse9gfkRv',
      'sd_Ou0Cf95qXb2KzKNv',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_taYnQ5DmvuCerihN(bh, parentSpanInst);
      //appendnew_next_sd_CmW5ZGyjKErnV13o
      return true;
    }
    return false;
  }
  async sd_qyIVGQUCsbZpYd3c(bh, parentSpanInst) {
    const nodes = ['sd_wLm2WeEcdy1VzXhO'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_aXZUSwx3VXhmRNuO(bh, parentSpanInst);
      //appendnew_next_sd_qyIVGQUCsbZpYd3c
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
