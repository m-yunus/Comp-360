
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";
import {saveAs} from "file-saver"
import { useDataContext } from '../../Context/Context';
const ReviewPdfGen = ({ generatePDFCallback}) => {
    const {data} =useDataContext();
    const styles = StyleSheet.create({
        page: {
          flexDirection: "column",
          margin: 10,
        },
        header: {
          fontSize: 18,
          marginBottom: 10,
          textAlign: "center",
        },
        section: {
          fontSize: 14,
          marginBottom: 10,
        },
      });
      const generatePDF = () => {
        const pdfDocument = (
          <Document>
            <Page size="A4" style={styles.page}>
              <Text style={styles.header}>Merit Compensation 2021-22</Text>
    
              {/* Culture Setting */}
              <View>
                <Text style={styles.section}>Culture setting:</Text>
                <Text style={styles.section}>
                  Base currency: {data?.cultural?.country} {data?.cultural?.currency}
                </Text>
                <Text style={styles.section}>
                  Date format: {data?.cultural?.date_format}
                </Text>
                <Text style={styles.section}>
                  Time zone: UTC+05:30(IST)
                </Text>
              </View>
    
              {/* Rounding Rules */}
              <View>
                <Text style={styles.section}>Rounding rules:</Text>
                <Text style={styles.section}>
                  Number: {data?.cultural?.number_round}
                </Text>
                <Text style={styles.section}>
                  Currency: {data?.cultural?.currency_round}
                </Text>
                <Text style={styles.section}>
                  Percentage: {data?.cultural?.percentage_round}
                </Text>
              </View>
    
              {/* Multi Currency */}
              <View>
                <Text style={styles.section}>Multi currency:</Text>
                <Text style={styles.section}>Multi currency: No</Text>
              </View>
    
              {/* Merit Cycle & Eligibility */}
              <View>
                <Text style={styles.section}>Merit cycle & Eligibility:</Text>
                <Text style={styles.section}>Merit type: Yearly</Text>
                <Text style={styles.section}>From Period: 01-01-2020</Text>
                <Text style={styles.section}>To Period: 31-12-2020</Text>
                <Text style={styles.section}>Eligibility: Joined until 27-09-2020</Text>
              </View>
    
              {/* Pro-rata increment */}
              <View>
                <Text style={styles.section}>Pro-rata increment to service:</Text>
                <Text style={styles.section}>Pro-rata increment to service: Yes</Text>
                <Text style={styles.section}>Pro-rata increment to service unit: Weekly</Text>
              </View>
    
              {/* Pro-rata off cycle increment */}
              <View>
                <Text style={styles.section}>Pro-rata off cycle increment:</Text>
                <Text style={styles.section}>Pro-rata off cycle increment to service: No</Text>
              </View>
    
              {/* Split Appraisal & matrix manager */}
              <View>
                <Text style={styles.section}>Split Appraisal & matrix manager:</Text>
                <Text style={styles.section}>Enable split appraisals: No</Text>
                <Text style={styles.section}>Enable matrix recommendations: No</Text>
              </View>
    
              {/* Pay Groups */}
              <View>
                <Text style={styles.section}>Pay Groups:</Text>
                <Text style={styles.section}>
                  Different merit rule for different employee groups: No
                </Text>
              </View>
    
              {/* Parity Measure */}
              <View>
                <Text style={styles.section}>Parity Measure:</Text>
                <Text style={styles.section}>Preferred parity measure: Compaeatio</Text>
              </View>
    
              {/* Merit Guidelines */}
              <View>
                <Text style={styles.section}>Merit Guidelines:</Text>
                <Text style={styles.section}>Enable merit guidelines: Yes</Text>
                <Text style={styles.section}>
                  Validation for supervisor Recommendation:
                </Text>
                <Text style={styles.section}>
                  Recommendation is allowed within the guidelines only
                </Text>
              </View>
    
              {/* Lump sum */}
              <View>
                <Text style={styles.section}>Lump sum:</Text>
                <Text style={styles.section}>
                  Employee salary goes above the pay range max: Ignore range min, and provide increment on current salary
                </Text>
              </View>
    
              {/* Corrections */}
              <View>
                <Text style={styles.section}>Corrections:</Text>
                <Text style={styles.section}>
                  When employee salary is below the pay range min: Ignore range max, and provide increment
                </Text>
              </View>
    
              {/* Promotions */}
              <View>
                <Text style={styles.section}>Promotions:</Text>
                <Text style={styles.section}>Enable promotion recommendations: Yes</Text>
              </View>
    
              {/* Bonus and Incentives */}
              <View>
                <Text style={styles.section}>Bonus and Incentives:</Text>
                <Text style={styles.section}>Enable bonus and incentives: Yes</Text>
                <Text style={styles.section}>
                  Different Bonus and incentives rules for different employee group: No
                </Text>
              </View>
    
              {/* Bonus Table */}
              <View>
                <Text style={styles.section}>Bonus Table:</Text>
                <table>
                  <thead>
                    <tr>
                      <th>Sl No</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Eligibility</th>
                      <th>Bonus(%)</th>
                      <th>Bonus Multiplier</th>
                      <th>Recommendation</th>
                      <th>Prorate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Reteption</td>
                      <td>time</td>
                      <td>30-11-2016</td>
                      <td>10 %</td>
                      <td>No</td>
                      <td>Yes (25-75)</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Star</td>
                      <td>time</td>
                      <td>31-12-2017</td>
                      <td>0 %</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>PLI</td>
                      <td>Performance</td>
                      <td>31-08-2020</td>
                      <td>0 %</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </View>
            </Page>
          </Document>
        );
    
        const pdfBlob = pdf(pdfDocument).toBlob();

        // Trigger the download with a specified filename
        saveAs(pdfBlob, 'Review.pdf');
      };
     
    
  return (
   <>
   {generatePDF}
   </>
  )
}

export default ReviewPdfGen