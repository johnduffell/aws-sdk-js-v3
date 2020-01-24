import {
  Application,
  Applications,
  Configuration,
  ConfigurationProfile,
  ConfigurationProfiles,
  CreateApplicationRequest,
  CreateConfigurationProfileRequest,
  CreateDeploymentStrategyRequest,
  CreateEnvironmentRequest,
  DeleteApplicationRequest,
  DeleteConfigurationProfileRequest,
  DeleteDeploymentStrategyRequest,
  DeleteEnvironmentRequest,
  Deployment,
  DeploymentStrategies,
  DeploymentStrategy,
  Deployments,
  Environment,
  Environments,
  GetApplicationRequest,
  GetConfigurationProfileRequest,
  GetConfigurationRequest,
  GetDeploymentRequest,
  GetDeploymentStrategyRequest,
  GetEnvironmentRequest,
  ListApplicationsRequest,
  ListConfigurationProfilesRequest,
  ListDeploymentStrategiesRequest,
  ListDeploymentsRequest,
  ListEnvironmentsRequest,
  ListTagsForResourceRequest,
  ResourceTags,
  StartDeploymentRequest,
  StopDeploymentRequest,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateApplicationRequest,
  UpdateConfigurationProfileRequest,
  UpdateDeploymentStrategyRequest,
  UpdateEnvironmentRequest,
  ValidateConfigurationRequest
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateApplicationRequest
  | CreateConfigurationProfileRequest
  | CreateDeploymentStrategyRequest
  | CreateEnvironmentRequest
  | DeleteApplicationRequest
  | DeleteConfigurationProfileRequest
  | DeleteDeploymentStrategyRequest
  | DeleteEnvironmentRequest
  | GetApplicationRequest
  | GetConfigurationProfileRequest
  | GetConfigurationRequest
  | GetDeploymentRequest
  | GetDeploymentStrategyRequest
  | GetEnvironmentRequest
  | ListApplicationsRequest
  | ListConfigurationProfilesRequest
  | ListDeploymentStrategiesRequest
  | ListDeploymentsRequest
  | ListEnvironmentsRequest
  | ListTagsForResourceRequest
  | StartDeploymentRequest
  | StopDeploymentRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateApplicationRequest
  | UpdateConfigurationProfileRequest
  | UpdateDeploymentStrategyRequest
  | UpdateEnvironmentRequest
  | ValidateConfigurationRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | Application
  | Application
  | Application
  | Applications
  | Configuration
  | ConfigurationProfile
  | ConfigurationProfile
  | ConfigurationProfile
  | ConfigurationProfiles
  | Deployment
  | Deployment
  | Deployment
  | DeploymentStrategies
  | DeploymentStrategy
  | DeploymentStrategy
  | DeploymentStrategy
  | Deployments
  | Environment
  | Environment
  | Environment
  | Environments
  | ResourceTags;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type AppConfigClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AppConfigClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS AppConfig</fullname>
 *          <p>Use AWS AppConfig, a capability of AWS Systems Manager, to create, manage, and quickly deploy
 *          application configurations. AppConfig supports controlled deployments to applications of any size
 *          and includes built-in validation checks and monitoring. You can use AppConfig with applications
 *          hosted on Amazon EC2 instances, AWS Lambda, containers, mobile applications, or IoT
 *          devices.</p>
 *
 *          <p>To prevent errors when deploying application configurations, especially for production
 *          systems where a simple typo could cause an unexpected outage, AppConfig includes validators. A
 *          validator provides a syntactic or semantic check to ensure that the configuration you want
 *          to deploy works as intended. To validate your application configuration data, you provide a
 *          schema or a Lambda function that runs against the configuration. The configuration
 *          deployment or update can only proceed when the configuration data is valid.</p>
 *
 *          <p>During a configuration deployment, AppConfig monitors the application to ensure that the
 *          deployment is successful. If the system encounters an error, AppConfig rolls back the change to
 *          minimize impact for your application users. You can configure a deployment strategy for
 *          each application or environment that includes deployment criteria, including velocity, bake
 *          time, and alarms to monitor. Similar to error monitoring, if a deployment triggers an alarm,
 *          AppConfig automatically rolls back to the previous version. </p>
 *
 *          <p>AppConfig supports multiple use cases. Here are some examples.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b>: Use AppConfig to carefully
 *                introduce changes to your application that can only be tested with production
 *                traffic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Feature toggle</b>: Use AppConfig to turn on new features
 *                that require a timely deployment, such as a product launch or announcement. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>User membership</b>: Use AppConfig to allow premium
 *                subscribers to access paid content. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Operational issues</b>: Use AppConfig to reduce stress on
 *                your application when a dependency or other external factor impacts the
 *                system.</p>
 *             </li>
 *          </ul>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig.html">AWS AppConfig User Guide</a>.</p>
 */
export class AppConfigClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppConfigClientResolvedConfig
> {
  readonly config: AppConfigClientResolvedConfig;

  constructor(configuration: AppConfigClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
