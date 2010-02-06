/*
 * OpenWMS, the open Warehouse Management System
 * 
 * Distributable under LGPL license.
 * See terms of license at gnu.org.
 */
package org.openwms.common.test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Required;

/**
 * A HsqlDBWrapper.
 * 
 * @author <a href="mailto:openwms@googlemail.com">Heiko Scherrer</a>
 * @version $Revision: 314 $
 */
public class HsqlDBWrapper {

    public static final String PERSISTENCE_UNIT_DURABLE = "OpenWMS-test-durable";
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private Connection connection;
    private boolean dbStarted = false;
    private String url;
    private String username;
    private String password;
    private boolean inMemoryDB = false;

    @Required
    public void setUrl(String url) {
        this.url = url;
    }

    @Required
    public void setUsername(String username) {
        this.username = username;
    }

    @Required
    public void setPassword(String password) {
        this.password = password;
    }

    public void setInMemoryDB(boolean inMemoryDB) {
        this.inMemoryDB = inMemoryDB;
    }

    /**
     * Start the in-memory HSQL database.
     * 
     */
    @PostConstruct
    public void startDb() {
        if (dbStarted || !inMemoryDB) {
            return;
        }
        logger.info("Starting in-memory HSQL database for unit tests");
        try {
            Class.forName("org.hsqldb.jdbcDriver");
            connection = DriverManager.getConnection(url, username, password);
            dbStarted = true;
        }
        catch (Exception ex) {
            throw new RuntimeException("Exception during HSQL database startup", ex);
        }
    }

    /**
     * Stop the in-memory HSQL database.
     * 
     */
    @PreDestroy
    public void stopDb() {
        if (!dbStarted || !inMemoryDB) {
            return;
        }
        logger.info("Stopping in-memory HSQL database.");
        try {
            connection.createStatement().execute("SHUTDOWN");
        }
        catch (Exception ex) {
            throw new RuntimeException("Exception during HSQL database shutdown.");
        }
        finally {
            try {
                connection.close();
            }
            catch (SQLException e) {
                logger.error("Error closing connection", e);
            }
            dbStarted = false;
        }
    }

    /**
     * Is the HSQL database started ?
     * 
     * @return
     */
    public boolean isDbStarted() {
        return dbStarted;
    }
}
