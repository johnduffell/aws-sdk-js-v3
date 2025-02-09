// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutBucketEncryptionRequest, PutBucketEncryptionRequestFilterSensitiveLog } from "../models/models_0";
import { de_PutBucketEncryptionCommand, se_PutBucketEncryptionCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBucketEncryptionCommand}.
 */
export interface PutBucketEncryptionCommandInput extends PutBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketEncryptionCommand}.
 */
export interface PutBucketEncryptionCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>This action uses the <code>encryption</code> subresource to configure default encryption
 *          and Amazon S3 Bucket Keys for an existing bucket.</p>
 *          <p>By default, all buckets have a default encryption configuration that uses server-side
 *          encryption with Amazon S3 managed keys (SSE-S3). You can optionally configure default encryption
 *          for a bucket by using server-side encryption with Key Management Service (KMS) keys (SSE-KMS) or
 *          dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS). If you specify default encryption by using
 *          SSE-KMS, you can also configure <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket
 *             Keys</a>. If you use PutBucketEncryption to set your <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">default bucket encryption</a> to SSE-KMS, you should verify that your KMS key ID is correct. Amazon S3 does not validate the KMS key ID provided in PutBucketEncryption requests.</p>
 *          <important>
 *             <p>If you're specifying a customer managed KMS key, we recommend using a fully qualified
 *             KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the
 *             requester’s account. This behavior can result in data that's encrypted with a KMS key
 *             that belongs to the requester, and not the bucket owner.</p>
 *             <p>Also, this action requires Amazon Web Services Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">
 *                Authenticating Requests (Amazon Web Services Signature Version 4)</a>. </p>
 *          </important>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:PutEncryptionConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a> in the
 *             <i>Amazon S3 User Guide</i>. </p>
 *          <p>The following operations are related to <code>PutBucketEncryption</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html">GetBucketEncryption</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html">DeleteBucketEncryption</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketEncryptionRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     Rules: [ // ServerSideEncryptionRules // required
 *       { // ServerSideEncryptionRule
 *         ApplyServerSideEncryptionByDefault: { // ServerSideEncryptionByDefault
 *           SSEAlgorithm: "AES256" || "aws:kms" || "aws:kms:dsse", // required
 *           KMSMasterKeyID: "STRING_VALUE",
 *         },
 *         BucketKeyEnabled: true || false,
 *       },
 *     ],
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketEncryptionCommandInput - {@link PutBucketEncryptionCommandInput}
 * @returns {@link PutBucketEncryptionCommandOutput}
 * @see {@link PutBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link PutBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 */
export class PutBucketEncryptionCommand extends $Command
  .classBuilder<
    PutBucketEncryptionCommandInput,
    PutBucketEncryptionCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: true,
      }),
    ];
  })
  .s("AmazonS3", "PutBucketEncryption", {})
  .n("S3Client", "PutBucketEncryptionCommand")
  .f(PutBucketEncryptionRequestFilterSensitiveLog, void 0)
  .ser(se_PutBucketEncryptionCommand)
  .de(de_PutBucketEncryptionCommand)
  .build() {}
