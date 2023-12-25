import React from "react";
import "../../../assets/scss/pages/users.scss";
import { FiExternalLink } from "react-icons/fi";
import link from "../../../assets/INF_Cancellation_Form.pdf";

export const PolicyCancel = () => {
  return (
    <div style={{ padding: "41px 138px" }} className="policycancelhead">
      <div style={{ border: "1px solid #d3d3d3" }} className="policyheadmain">
        <div style={{ padding: "8px 8px" }}>
          <h5>
            <b>Policy Cancellation</b>
          </h5>
          <div className="">
            <ol className="orderlist">
              <li>
                Refund of premium, less a $25 processing fee, will be considered
                only if Cancellation Form is received by the INF prior to the
                effective date of coverage.
              </li>
              <li>
                After that date, the premium is considered fully earned and
                non-refundable.
              </li>
              <li>
                All cancellation requests should be submitted by completing the
                <a
                  href={link}
                  target="_blank"
                  className=""
                  style={{ color: "blue" }}
                >
                  {" "}
                  Cancellation Form. <FiExternalLink size={16} />
                </a>
              </li>
              <li>
                The form can be faxed to 408-520-4967 or emailed to
                operations@infplans.com. Policy changes can not be made under
                any circumstances once the policy becomes effective.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
