export default function CreateTicket() {
  return (
    <div className="container my-5">

      <h3 className="fs-4 ms-4">To create a ticket, select a relevent topic</h3>

      <div className="row support-page">

        <div className="col p-5">
          <h3><i className="fa-solid fa-circle-plus"></i>Account Opening</h3>
          <ul>
            <li><a href="">Online Account Opening</a></li>
            <li><a href="">Ofline Account Opening</a></li>
            <li><a href="">Company, Partnership and HUF Account Opening</a></li>
            <li><a href="">NRI Account Opening</a></li>
            <li><a href="">Charges at Zerodha</a></li>
            <li><a href="">Zerodha IDFC First Bank 3-in-1 Account</a></li>
            <li><a href="">Getting Started</a></li>
          </ul>
        </div>

        <div className="col p-5">
          <h3><i className="fa-solid fa-user"></i>Your Zerodha Account</h3>
          <ul>
            <li><a href="">Login Credentials</a></li>
            <li><a href="">Account Modification and Segement Addition</a></li>
            <li><a href="">DP ID and bank details</a></li>
            <li><a href="">Your Profile</a></li>
            <li><a href="">Transfer and Conversion of shares</a></li>
          </ul>
        </div>

        <div className="col p-5">
          <h3><i className="fa-solid fa-chart-column"></i>Zerodha Average</h3>
          <ul>
            <li><a href="">Margin/average, Product and Order types</a></li>
            <li><a href="">Kite Web and Mobile</a></li>
            <li><a href="">Trading FAQs</a></li>
            <li><a href="">Coporate Actions</a></li>
            <li><a href="">Sentinel</a></li>
            <li><a href="">Kite API</a></li>
            <li><a href="">PI and other platforms</a></li>
            <li><a href="">Stockreports</a></li>
            <li><a href="">GTT</a></li>
          </ul>
        </div>

      </div>



      <div className="row support-page">

        <div className="col p-5">
          <h3><i class="fa-solid fa-credit-card"></i>Funds</h3>
          <ul>
            <li><a href="">Adding Funds</a></li>
            <li><a href="">Fund Withdrawl</a></li>
            <li><a href="">eMandates</a></li>
            <li><a href="">Adding Bank Accounts</a></li>
          </ul>
        </div>

        <div className="col p-5">
          <h3><i class="fa-solid fa-money-bill-1"></i>Console</h3>
          <ul>
            <li><a href="">Reports</a></li>
            <li><a href="">Ledger</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">60 Day Challenge</a></li>
            <li><a href="">IPO</a></li>
            <li><a href="">Referal Program</a></li>
          </ul>
        </div>

        <div className="col p-5">
          <h3><i class="fa-solid fa-circle-dollar-to-slot"></i>Coin</h3>
          <ul>
            <li><a href="">Understanding Mutual Funds</a></li>
            <li><a href="">About Coin</a></li>
            <li><a href="">Buying and Selling through Coin</a></li>
            <li><a href="">Starting an SIP</a></li>
            <li><a href="">Managing your Portfolio</a></li>
            <li><a href="">Coin App</a></li>
            <li><a href="">Goverment Securities</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};