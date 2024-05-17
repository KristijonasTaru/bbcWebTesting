pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    triggers {
        cron('H 8 * * 1-5') // Monday to Friday 08:00
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

                    // ansiColor for console to have readible file in jenkins
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

                // Debugging output
                sh 'ls -la mochawesome-report' // List contents of mochawesome-report directory before copying
                // Corrected cp command with quotes around the destination directory
                sh 'cp -r mochawesome-report/assets mochawesome-report/mochawesome.html "C:\\Users\\krtarut\\.jenkins\\workspace\\BBC Web Automation Testing"'
                sh 'ls -la "C:\\Users\\krtarut\\.jenkins\\workspace\\BBC Web Automation Testing"' // List contents of destination directory after copying
            }
                // Artifact - any file created while running build, lower line ensure, that new file will be created even it's empty 
                archiveArtifacts artifacts: 'mochawesome-report/*', allowEmptyArchive: true
        }
    }
}