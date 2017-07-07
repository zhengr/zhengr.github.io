var oracledb = require('oracledb');

oracledb.getConnection(
  {
    user          : "apps",
    password      : "apps",
    connectString : "192.168.1.60:1530/VIS"
  },
  function(err, connection)
  {
    if (err) { console.error(err.message); return; }
    connection.execute(
      "SELECT WN.NOTIFICATION_ID,"
+               " WN.FROM_USER, "
+               " DECODE(WN.MORE_INFO_ROLE, "
+                      " NULL, "
+                      " WN.TO_USER, "
+                      " wf_directory.GetRoleDisplayName(WN.MORE_INFO_ROLE)) AS TO_USER, "
+               " DECODE(WN.MORE_INFO_ROLE, "
+                      " NULL, "
+                      " WN.SUBJECT, "
+                      " FND_MESSAGE.GET_STRING('FND', 'FND_MORE_INFO_REQUESTED') || ' ' || "
+                      " WN.SUBJECT) AS SUBJECT, "
+               " WN.LANGUAGE, "
+               " WN.BEGIN_DATE, "
+               " WN.DUE_DATE, "
+               " WN.STATUS, "
+               " WN.PRIORITY, "
+              " 'P' AS PRIORITY_F, "
+               "WN.RECIPIENT_ROLE, "
+              " WN.END_DATE, "
+              " WIT.DISPLAY_NAME AS TYPE, "
+              " WN.MORE_INFO_ROLE, "
+               " WN.FROM_ROLE, "
+               " WN.MESSAGE_TYPE, "
+               " WN.MESSAGE_NAME, "
+               " WN.MAIL_STATUS, "
+               " WN.ORIGINAL_RECIPIENT "
+          " FROM WF_NOTIFICATIONS WN, WF_ITEM_TYPES_TL WIT, WF_LOOKUPS_TL WL "
+         " WHERE WN.STATUS  = 'OPEN' "
+           " AND WN.message_type = WIT.name "
+           " AND WIT.language = userenv('LANG') "
+           " AND WL.lookup_type = 'WF_NOTIFICATION_STATUS' "
+           " AND WN.status = WL.lookup_code "
+           " AND WL.language = userenv('LANG') "
+           " AND WN.RECIPIENT_ROLE = 'SYSADMIN' ",
      [],  // bind value 
      function(err, result)
      {
        if (err) { console.error(err.message); return; }
        console.log(result.rows);
      });
  });
