$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/steps/scenarios/LoginLogout.feature");
formatter.feature({
  "name": "LoginLogout (Scenario that 1st sample.)",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginLogout"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Scenario that 1st sample.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I check that user \u0027\u003cuser\u003e\u0027 is not empty.",
  "keyword": "Given "
});
formatter.step({
  "name": "I check that password \u0027\u003cpassword\u003e\u0027 is not empty.",
  "keyword": "Given "
});
formatter.step({
  "name": "\u0027ALBANQUE_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.step({
  "name": "The ALBANQUE home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "I log in to ALBANQUE as \u0027\u003cuser\u003e\u0027 \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "The ALBANQUE portal is displayed with \u0027\u003cuser\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "I log out of ALBANQUE",
  "keyword": "When "
});
formatter.step({
  "name": "The ALBANQUE logout page is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "I go back to \u0027ALBANQUE_HOME\u0027",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "user",
        "password"
      ]
    },
    {
      "cells": [
        "1",
        "axel",
        "test"
      ]
    },
    {
      "cells": [
        "2",
        "toto",
        "test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Scenario that 1st sample.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginLogout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check that user \u0027axel\u0027 is not empty.",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that password \u0027test\u0027 is not empty.",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u0027ALBANQUE_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.match({
  "location": "BrowserSteps.openUrlIfDifferent(String,GherkinStepCondition\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The ALBANQUE home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AlbanqueSteps.checkAlbanqueLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log in to ALBANQUE as \u0027axel\u0027 \u0027test\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "AlbanqueSteps.logInToAlbanque(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The ALBANQUE portal is displayed with \u0027axel\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "AlbanqueSteps.checkAlbanquePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log out of ALBANQUE",
  "keyword": "When "
});
formatter.match({
  "location": "AlbanqueSteps.logOutOfAlbanque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The ALBANQUE logout page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AlbanqueSteps.checkAlbanqueLogoutPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go back to \u0027ALBANQUE_HOME\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "BrowserSteps.goToUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario that 1st sample.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginLogout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check that user \u0027toto\u0027 is not empty.",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that password \u0027test\u0027 is not empty.",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u0027ALBANQUE_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.match({
  "location": "BrowserSteps.openUrlIfDifferent(String,GherkinStepCondition\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The ALBANQUE home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AlbanqueSteps.checkAlbanqueLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log in to ALBANQUE as \u0027toto\u0027 \u0027test\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "AlbanqueSteps.logInToAlbanque(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The ALBANQUE portal is displayed with \u0027toto\u0027",
  "keyword": "Then "
});
formatter.embedding("image/png", "embedded0.png");
formatter.match({
  "location": "AlbanqueSteps.checkAlbanquePage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Fail: /!\\ Unable to authenticate with provided credentials. /!\\ [albanque]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat com.github.noraui.exception.Result$Failure.fail(Result.java:217)\r\n\tat com.github.noraui.cucumber.interceptor.StepInterceptor.invoke(StepInterceptor.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:50)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:369)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:275)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:239)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:160)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\r\n\tat ✽.The ALBANQUE portal is displayed with \u0027toto\u0027(src/test/resources/steps/scenarios/LoginLogout.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I log out of ALBANQUE",
  "keyword": "When "
});
formatter.match({
  "location": "AlbanqueSteps.logOutOfAlbanque()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The ALBANQUE logout page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AlbanqueSteps.checkAlbanqueLogoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I go back to \u0027ALBANQUE_HOME\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "BrowserSteps.goToUrl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});