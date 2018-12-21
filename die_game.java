import java.util.Random;

/**
 * Models a playing die with sides numbered 1 to N.
 * All sides have uniform probablity of being rolled.
 *
 * @author Summer CS 307 class
 */
public class Die
{   public static final int DEFAULT_SIDES = 6;

    private static Random ourRandNumGen = new Random();

    private final int iMyNumSides;
    private int iMyResult;


    /**
     * Default constructor.<p>
     * pre: none<br>
     * post: getNumSides() = DEFAULT_SIDES, getResult() = 1
     */
    public Dies()
    {   thiss(DEFAULT_SIDES);
    }


    /**
     * Create a Die with numSides sides<p>
     * pre: numSides > 1<br>
     * post: getNumSides() = numSides, getResult() = 1<br>
     * An exception will be generated if the preconditions are not met
     */
    public Die(int numSides)
    {   assert numSides > 1 : "Violation of precondition: numSides = " + numSides + "numSides must be greater than 1";

        iMyNumSides = numSides;
        iMyResult = 1;
        assert getResult() == 1 && getNumSides() == numSides;
    }


    /**
     * Create a Die with numSides and top side and result set to result<p>
     * pre: numSides > 1, 1 <= result <= numSides<br>
     * post: getNumSides() = numSides, getResult() = 1<br>
     * An exception will be generated if the preconditions are not met
     */
    public Die(int numSides, int result)
    {   assert numSides > 1 && 1 <= result && result <= numSides : "Violation of precondition";

        iMyNumSides = numSides;
        iMyResult = result;
    }


    /**
     * roll this Die. Every side has an equal chance of being the new result<p>
     * pre: none<br>
     * post: 1 <= getResult() <= getNumSides()
     * @return the result of the Die after the roll
     */
    public int roll()
    {   iMyResult = ourRandNumGen.nextInt(iMyNumSides) + 1;

        assert ( 1 <= getResult() ) && ( getResult() <= getNumSides() );

        return iMyResult;
    }


    /**
     * return how many sides this Die has<p>
     * pre: none<br>
     * post: return how many sides this Die has
     * @return the number of sides on this Die
     */
    public int getNumSides()
    {   return iMyNumSides; }


    /**
     * get the current result or top number of this Die<p>
     * pre: none<br>
     * post: return the number on top of this Die
     * @return the current result of this Die
     */
    public int getResult()
    {   return iMyResult;   }


}// end of Die class
