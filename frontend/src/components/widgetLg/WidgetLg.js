import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Tracking</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Tag ID</th>
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Location</th>
          <th className="widgetLgTh">Date</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">#0001</span>
          </td>
          <td className="widgetLgDate">Christian Silva</td>
          <td className="widgetLgAmount">Room #2</td>
          <td className="widgetLgStatus">1/31/2022</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">#0031</span>
          </td>
          <td className="widgetLgDate">Isaiah Williams</td>
          <td className="widgetLgAmount">Room #1</td>
          <td className="widgetLgStatus"> 1/31/2022</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">#0005</span>
          </td>
          <td className="widgetLgDate">Dylan Sauerbrun</td>
          <td className="widgetLgAmount">Room #1</td>
          <td className="widgetLgStatus">1/31/2022</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">#0021</span>
          </td>
          <td className="widgetLgDate">Aundre’ Fredericks</td>
          <td className="widgetLgAmount">Room #4</td>
          <td className="widgetLgStatus">1/31/2022</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">#0001</span>
          </td>
          <td className="widgetLgDate">Christian Silva</td>
          <td className="widgetLgAmount">Room #4</td>
          <td className="widgetLgStatus">1/31/2022</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">#0011</span>
          </td>
          <td className="widgetLgDate">Test User</td>
          <td className="widgetLgAmount">Room #4</td>
          <td className="widgetLgStatus">1/31/2022</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">#0031</span>
          </td>
          <td className="widgetLgDate">Tony Stark</td>
          <td className="widgetLgAmount">Room #4</td>
          <td className="widgetLgStatus">1/31/2022</td>
        </tr>
      </table>
    </div>
  );
}
