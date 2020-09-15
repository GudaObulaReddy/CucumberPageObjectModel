package com.qa.stepDefinitions;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;


public class HomePageSteps extends TestBase {
  LoginPage loginpage;
  HomePage homePage;
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable {
	   TestBase.initialization();
	}

	@Then("^user is on login Page$")
	public void user_is_on_login_Page() throws Throwable {
		loginpage=new LoginPage();
	   String title=loginpage.validateLoginPageTitle();
	  Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}

	@Then("^user logs into app$")
	public void user_enters_username_and_password() throws Throwable {
	homePage=loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
	}

	@Then("^validate home page title$")
	public void validate_home_page_title() throws Throwable {
		String homeTitle= homePage.verifyHomePageTitle();
		  Assert.assertEquals("CRMPRO", homeTitle);
	}

	@Then("^validate logged in username$")
	public void validate_logged_in_username() throws Throwable {
	   boolean flag=homePage.verifyCorrectUserName();
	   Assert.assertTrue(flag);
	}


}
