<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>RK INTERNATIONAL SCHOOL</title>
</head>
<body>
<%@page import="java.sql.*"%>
<%@page import="javax.sql.*" %>
<%@page import="java.sql.*,java.util.*" %>
<% 
String userid=request.getParameter("usernamee");
session.putValue("usernamee",userid);
String pwd=request.getParameter("passwordd");
Class.forName("com.mysql.jdbc.Driver");
java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test1","root","1234");
 Statement st=con.createStatement();
 ResultSet rs=st.executeQuery("select * from registration where username='"+userid+"' and password='"+pwd+"'");
 try{
	 rs.next();
	 if(rs.getString("username").equals(userid)&& rs.getString("password").equals(pwd))
	 {
		 response.sendRedirect("output.jsp");

	 }
	 else
	 {
		 out.println("invalid userid and password");
     }
 }
 catch(Exception e)
 {
	 
    response.sendRedirect("error.jsp");	 
 }
				 
%>

	 
	 
	

</body>
</html>