function consultation({ name }) {
  const body = `
    <div>
      <div class="w-full" style="border-bottom: 2px solid #8d2a9d">
        <div class="flex items-center justify-center py-[30px]">
          <img
            src="https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/logo-golden-outline/logo_golden_outline.png"
            alt=""
          />
          <p class="font-poppins text-[24px]">
            EzyBill
            <span class="font-poppins text-[#7E007E] font-[700]">India </span>
          </p>
        </div>
      </div>
      <div
        style="
          background: url('https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/letter/email_bg.png');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        "
        class="pt-[51px] w-full px-[68px]"
      >
        <div class="container w-full max-w-[1280px] mx-auto">
          <div class="w-full">
            <div class="flex flex-col items-center gap-[20px]">
              <p class="font-sans text-[#7E007E] text-[46px] font-[600]">
                Email Confirmation for Consultation
              </p>
              <img
                src="https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/letter/letter_banner1.png"
                alt=""
              />
            </div>
            <div class="flex flex-col items-start gap-10 mt-10 w-[1031px]">
              <p class="font-poppins font-[400] text-[24px]">
                Dear ${name},
              </p>
              <p class="font-poppins font-[400] text-[24px]">
                Thank you for requesting a consultation with EzyBill India.
              </p>
              <p class="font-poppins font-[400] text-[24px]">
                We appreciate your interest in our services. Our team will get
                back to you shortly to schedule a convenient time for the
                consultation. If you have any immediate questions or require
                assistance, please don't hesitate to contact us.
              </p>
              <p class="font-poppins font-[400] text-[24px]">Best Regards,</p>

              <p class="font-poppins font-[700] text-[22px] text-[#7E007E]">
                EzyBill
                <span class="font-poppins text-black font-[400] text-[22px]">
                  India Team
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- sub-footer -->

      <div
        class="mt-[70px] mb-[10px] bg-yellow-400 h-[50px] w-full flex items-center justify-center relative"
      >
        <p
          class="w-full text-[#7E007E] font-poppins text-[24px] text-center font-[600]"
        >
          Feel free to ask us any questions or queries
        </p>
      </div>

      <!-- footer -->
      <div class="py-5 w-full bg-[#7E007E] flex justify-evenly text-white">
        <div class="flex flex-col gap-4">
          <p class="text-[22px] text-center font-poppins">
            EzyBill <span class="font-[600]">India</span>
          </p>
          <p class="text-[22px] w-[320px] text-center font-poppins">
            Eastland Microsystems Malacha Road, P.O. Noapara, Barasat, Kolkata
            700125, <br />
            West Bengal, India
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-[22px] text-center font-poppins font-[600]">
            Contact Us
          </p>
          <div class="flex gap-5 py-2 justify-center text-[32px]">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <p class="text-[22px] text-center font-poppins font-[600]">
            Contact No. : +91 9836041044
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-[22px] text-center font-poppins font-[600]">
            Visit Us
          </p>
          <div class="text-[32px] flex justify-center">
            <FaInternetExplorer />
          </div>
          <p class="text-[22px] text-center font-poppins font-[600]">
            https://ezybill.in
          </p>
        </div>
      </div>
    </div>
    `;
  return body;
}

function call({
  name, date, time, subject
}) {
  const body = `
  <div>
  <div class="w-full" style="border-bottom: 2px solid #8d2a9d">
    <div class="flex items-center justify-center py-[30px]">
      <img
        src="https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/logo-golden-outline/logo_golden_outline.png"
        alt=""
      />
      <p class="font-poppins text-[24px]">
        EzyBill
        <span class="font-poppins text-[#7E007E] font-[700]">India </span>
      </p>
    </div>
  </div>
  <div
    style="
      background: url('https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/letter/email_bg.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    "
    class="pt-[51px] w-full px-[68px]"
  >
    <div class="container w-full max-w-[1280px] mx-auto">
      <div class="w-full">
        <div class="flex flex-col items-center gap-[20px]">
          <p class="font-sans text-[#7E007E] text-[46px] font-[600]">
            Email Confirmation for Scheduling a Call
          </p>
          <img
            src="https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/letter/thankyou_banner.png"
            alt=""
          />
        </div>
        <div class="flex flex-col items-start gap-10 mt-10 w-[1031px]">
          <p class="font-poppins font-[400] text-[24px]">
            Dear ${name}
          </p>
          <p class="font-poppins font-[400] text-[24px]">
            Thank you for scheduling a call with EzyBill India. We
            appreciate your interest in connecting with us.
          </p>
          <p class="font-poppins font-[400] text-[24px]">
            Here are the details of your scheduled call: <br />
            **Date:** ${date}* <br />
            *Time:** ${time}* <br />
            *Subject:** ${subject}
          </p>
          <p class="font-poppins font-[400] text-[24px]">
            Our team will be ready to assist you during the call, and we're
            looking forward to our discussion. If you have any specific
            questions or need to make changes to the schedule, please feel
            free to contact us.
          </p>

          <p class="font-poppins font-[400] text-[24px]">Best Regards,</p>
          <div>
            <p class="font-poppins font-[700] text-[22px] text-[#7E007E]">
              EzyBill
              <span class="font-poppins text-black font-[400] text-[22px]">
                India Team
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- sub-footer -->

  <div
    class="mt-[70px] mb-[10px] bg-yellow-400 h-[50px] w-full flex items-center justify-center relative"
  >
    <p
      class="w-full text-[#7E007E] font-poppins text-[24px] text-center font-[600]"
    >
      Feel free to ask us any questions or queries
    </p>
  </div>

  <!-- footer -->
  <div class="py-5 w-full bg-[#7E007E] flex justify-evenly text-white">
    <div class="flex flex-col gap-4">
      <p class="text-[22px] text-center font-poppins">
        EzyBill <span class="font-[600]">India</span>
      </p>
      <p class="text-[22px] w-[320px] text-center font-poppins">
        Eastland Microsystems Malacha Road, P.O. Noapara, Barasat, Kolkata
        700125, <br />
        West Bengal, India
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-[22px] text-center font-poppins font-[600]">
        Contact Us
      </p>
      <div class="flex gap-5 py-2 justify-center text-[32px]">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <p class="text-[22px] text-center font-poppins font-[600]">
        Contact No. : +91 9836041044
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-[22px] text-center font-poppins font-[600]">
        Visit Us
      </p>
      <div class="text-[32px] flex justify-center">
        <FaInternetExplorer />
      </div>
      <p class="text-[22px] text-center font-poppins font-[600]">
        https://ezybill.in
      </p>
    </div>
  </div>
</div>
    `;
  return body;
}

function demo({ name }) {
  const body = `
  <div>
  <div class="w-full" style="border-bottom: 2px solid #8d2a9d">
    <div class="flex items-center justify-center py-[30px]">
      <img
        src="https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/logo-golden-outline/logo_golden_outline.png"
        alt=""
      />
      <p class="font-poppins text-[24px]">
        EzyBill
        <span class="font-poppins text-[#7E007E] font-[700]">India </span>
      </p>
    </div>
  </div>
  <div
    style="
      background: url('https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/letter/email_bg.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    "
    class="pt-[51px] w-full px-[68px]"
  >
    <div class="container w-full max-w-[1280px] mx-auto">
      <div class="w-full">
        <div class="flex flex-col items-center gap-[20px]">
          <p class="font-sans text-[#7E007E] text-[46px] font-[600]">
            Email Confirmation for Demonstration
          </p>
          <img
            src="https://ezybill-email-template-images.s3.ap-south-1.amazonaws.com/letter/letter_banner.png"
            alt=""
          />
        </div>
        <div class="flex flex-col items-start gap-10 mt-10 w-[1031px]">
          <p class="font-poppins font-[400] text-[24px]">
            Dear ${name},
          </p>
          <p class="font-poppins font-[400] text-[24px]">
            Thank you for requesting a demo of EzyBill India.
          </p>
          <p class="font-poppins font-[400] text-[24px]">
            We're excited to showcase our services to you. Our team will be
            in touch shortly to coordinate the details for the demo. If you
            have any specific questions or need further assistance, feel
            free to reach out to us at any time.
          </p>
          <p class="font-poppins font-[700] text-[22px] text-[#7E007E]">
            EzyBill
            <span class="font-poppins text-black font-[400] text-[22px]">
              India Team
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- sub-footer -->

  <div
    class="mt-[70px] mb-[10px] bg-yellow-400 h-[50px] w-full flex items-center justify-center relative"
  >
    <p
      class="w-full text-[#7E007E] font-poppins text-[24px] text-center font-[600]"
    >
      Feel free to ask us any questions or queries
    </p>
  </div>

  <!-- footer -->
  <div class="py-5 w-full bg-[#7E007E] flex justify-evenly text-white">
    <div class="flex flex-col gap-4">
      <p class="text-[22px] text-center font-poppins">
        EzyBill <span class="font-[600]">India</span>
      </p>
      <p class="text-[22px] w-[320px] text-center font-poppins">
        Eastland Microsystems Malacha Road, P.O. Noapara, Barasat, Kolkata
        700125, <br />
        West Bengal, India
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-[22px] text-center font-poppins font-[600]">
        Contact Us
      </p>
      <div class="flex gap-5 py-2 justify-center text-[32px]">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <p class="text-[22px] text-center font-poppins font-[600]">
        Contact No. : +91 9836041044
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-[22px] text-center font-poppins font-[600]">
        Visit Us
      </p>
      <div class="text-[32px] flex justify-center">
        <FaInternetExplorer />
      </div>
      <p class="text-[22px] text-center font-poppins font-[600]">
        https://ezybill.in
      </p>
    </div>
  </div>
</div>
    `;
  return body;
}

function adminMail(type, data) {
  let body = `Hi, A user has requested for a ${type}. Please find details below <br>`;
  Object.keys(data).forEach((key) => {
    body += `<br>${key} :- ${data[key]}<br>`;
  });
  return body;
}

module.exports = {
  consultation,
  demo,
  call,
  adminMail
};
