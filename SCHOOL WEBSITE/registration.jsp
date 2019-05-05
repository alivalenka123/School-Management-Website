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
<% 
String namee=request.getParameter("name");
session.putValue("name",namee);
String user=request.getParameter("username");

String pwd=request.getParameter("password");

String conpass=request.getParameter("confirmpassword");
String mobno=request.getParameter("mobilenumber");
String email=request.getParameter("email");
Class.forName("com.mysql.jdbc.Driver");
java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test1", "root","1234");
 Statement st=con.createStatement();
 ResultSet rs;
 int i=st.executeUpdate("insert into registration values('"+namee+"','"+user+"','"+pwd+"','"+conpass+"','"+mobno+"','"+email+"')");
 response.sendRedirect("info.jsp");
 %>
<a href="loggin.html">login</a>
</body>
</html>