$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ramana Reddy/Desktop/selinium/CucumberPOM/src/main/java/com/qa/features/freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user logs into app",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate logged in username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 13003854400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_Page()"
});
formatter.result({
  "duration": 88930300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 2312990900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 122693800,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qa.stepDefinitions.HomePageSteps.validate_home_page_title(HomePageSteps.java:35)\r\n\tat ✽.Then validate home page title(C:/Users/Ramana Reddy/Desktop/selinium/CucumberPOM/src/main/java/com/qa/features/freecrm.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "status": "skipped"
});
});