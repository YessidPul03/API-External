declare module 'mysql-await' {
    import * as mysql from 'mysql';
  
    namespace mysqlAwait {
      type Pool = mysql.Pool;
      type PoolConnection = mysql.PoolConnection;
      type Connection = mysql.Connection;
      type Query = mysql.Query;
      type ResultSetHeader = mysql.ResultSetHeader;
      type FieldInfo = mysql.FieldInfo;
      type FieldPacket = mysql.FieldPacket;
      type Packet = mysql.Packet;
      type OkPacket = mysql.OkPacket;
      type RowDataPacket = mysql.RowDataPacket;
      type ResultSet = mysql.ResultSet;
      type Row = mysql.Row;
      type Fields = mysql.Fields;
      type Packets = mysql.Packets;
    }
  
    function createPool(config: mysql.PoolOptions): mysqlAwait.Pool;
    function createConnection(config: mysql.ConnectionOptions): mysqlAwait.Connection;
  }