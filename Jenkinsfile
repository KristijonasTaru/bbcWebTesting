pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    triggers {
        cron('30 8 * * 1-5') // Monday to Friday 08:30
    }

    stages {
        stage('Run Cypress Tests') {
            steps {
                script {
                    // Install and update NPM packages
                    bat 'npm install'
                    bat 'npm update'

                    // Delete old reports and screenshots
                    bat 'npm run deleteAllScreenshots'
                    bat 'npm run deleteMochawesomeReports'
                    bat 'npm run deleteMochawesomeJson'

                    // Run all Cypress tests, || true to keep pipeline running even after fail
                    bat 'npm run triggerAllTest || true'

                    // ansiColor for console to have readable file in Jenkins
                    echo '\033[34mHello\033[0m \033[33mcolorful\033[0m \033[35mworld!\033[0m'
                }
            }
        }
    }

    post {
        always {
            script {
                // Create mochawesome report
                bat 'npm run mergeMochawesome'

                // Corrected cp command with quotes around the destination directory
                bat 'cp -r mochawesome-report/mochawesome.html "C:\\Users\\krtarut\\.jenkins\\workspace\\BBC Web Automation Testing"'

                // Artifact - files that is for saving for jenkins
                // Before run disabel CSP in jenkins - 
                // System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
                archiveArtifacts artifacts: 'mochawesome-report/**, cypress/screenshots/**', allowEmptyArchive: true

                // Publish HTML report
                publishHTML target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'mochawesome-report',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Mochawesome Report',
                    reportTitles: 'Mochawesome Test Report'
                ]
            }
        }
    }
}