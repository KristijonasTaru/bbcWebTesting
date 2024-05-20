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
                    sh 'npm install'
                    sh 'npm update'

                    // Delete old reports and screenshots
                    sh 'npm run deleteAllScreenshots'
                    sh 'npm run deleteMochawesomeReports'
                    sh 'npm run deleteMochawesomeJson'

                    // Run all Cypress tests, || true to keep pipeline running even after fail
                    sh 'npm run triggerAllTest || true'

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
                sh 'npm run mergeMochawesome'

                // Corrected cp command with quotes around the destination directory
                sh 'cp -r mochawesome-report/mochawesome.html "C:\\Users\\krtarut\\.jenkins\\workspace\\BBC Web Automation Testing"'

                // Artifact - specify the path to the HTML report to archive
                // Before run disabel CSP in jenkins - 
                // System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
                archiveArtifacts artifacts: 'mochawesome-report/**', allowEmptyArchive: true

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